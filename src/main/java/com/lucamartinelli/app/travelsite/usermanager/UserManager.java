package com.lucamartinelli.app.travelsite.usermanager;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Provider;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;
import org.jboss.logging.MDC;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerDBEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerInMemoryEJB;
import com.lucamartinelli.app.travelsite.usermanager.utils.FileToBase64;
import com.lucamartinelli.app.travelsite.usermanager.utils.ValidateInput;
import com.lucamartinelli.app.travelsite.usermanager.vo.MultipartBody;
import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;


@RolesAllowed("user")
@Path("/usermanager")
@RequestScoped
public class UserManager {
	
	private UserManagerEJB ejb;
	
	@Inject
	Logger log;
	
	@Inject
	JsonWebToken jwt;
	
	@ConfigProperty(name="usermanager.mode", defaultValue = "IN_MEMORY")
	String mode;
	
	@Inject
	Provider<UserManagerInMemoryEJB> inMemoryEJB;
	@Inject
	Provider<UserManagerDBEJB> dbEJB;
	
	@Context
	HttpServletResponse servletResponse;
	
	@PostConstruct
	public void init() {
		if (jwt != null)
			MDC.put("username", jwt.getClaim("upn"));
		
		log.debug("UserManager service is loaded with mode [" + mode + "]");
		if (ejb == null) {
			switch (mode) {
			case "IN_MEMORY":
				ejb = inMemoryEJB.get();
				break;

			case "DB":
				ejb = dbEJB.get();
				break;
				
			default:
				log.error("Error configuration Login service, please check"
						+ " the value for key [usermanager.mode]");
			}
		}
	}
	
	@PreDestroy
	public void onDestroy() {
		MDC.clear();
	}
	

    @GET
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Path("")
    public UserVO getUserData() {
    	if (ejb == null) {
    		log.error("Error in configuration USERMANAGER EJB!");
    		setError(503, "Service Unavailable. Wrong Configurations");
    		return null;
    	}
        try {
        	return ejb.getUserData(jwt.getClaim("upn"));
        } catch (RuntimeException e) {
        	log.error("Error during execution getUserData() ", e);
        	setError(500, "Internal server error");
        	return null;
		}
    }
    
    @POST
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Path("/update") 
    public Response updateUserInfo(UserVO user){
    	if (ejb == null) {
    		log.error("Error in configuration USERMANAGER EJB!");
    		setError(503, "Service Unavailable. Wrong Configurations");
    		return null;
    	}
    	final String validateError = ValidateInput.validateForUpdate(user);
    	if (validateError != null) {
    		log.error("Error in input validation " + validateError);
    		setError(400, "Request is not valid: " + validateError);
    		return null;
    	}
    	
    	try {
	    	if (ejb.updateUser(user)) {
	    		log.debug("Update completed");
	    	} else {
	    		log.error("Update user [" + user + "] failed");
	    		setError(501, "Update user failed");
	    		return null;
	    	}
    	} catch (RuntimeException e) {
        	log.error("Error during execution updateUserInfo() ", e);
        	setError(500, "Internal server error");
        	return null;
		}
    	return Response.ok().build();
    }
    
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Path("/update-image")
    public Response uploadAvatar(@MultipartForm MultipartBody data) {
    	
    	File file = null;
    	try {
    		file = Files.createTempFile("avatar", "-"+System.currentTimeMillis()).toFile();
        	FileUtils.copyInputStreamToFile(data.file, file);
		} catch (IOException e) {
			log.error("Error during create temp file ", e);
			return Response.serverError().entity(e).build();
		}
    	
		if (file == null || !file.exists() || file.length() == 0) {
			log.error("File not exists");
			setError(400, "Wrong input");
			return null;
		}
		
		log.debug("###### FILE INFO ######");
    	log.debug("Tmp name: " + file.getName());
    	log.debug("Total space: " + (file.length() / 1024) + " KB");
    	log.debug("#######################");
		
		if (!ValidateInput.checkAvatarSize(file)) {
			log.warn("Size is too high");
			setError(400, "Image size is too high");
			return null;
		}
		final String prefix = FileToBase64.getPrefix(data.fileType);
		if (prefix == null) {
			log.warn("File type " + data.fileType + " not supported");
			setError(400, "Image format [" + data.fileType + "] not supported");
    		return null;
		}
			
		final String base64 = FileToBase64.encode(file, prefix);
		final UserVO user = new UserVO();
		user.setUsername(jwt.getClaim("upn"));
		user.setAvatar(base64);
		
		if (ejb == null) {
    		log.error("Error in configuration USERMANAGER EJB!");
    		setError(503, "Service Unavailable. Wrong Configurations");
    		return null;
    	}
		
		log.debug("Final base64 size --> " + base64.length() + " characters");
		log.debug("BASE64:\n " + base64.substring(0,50) + "..." + base64.substring(base64.length()-51));
		
		if (!ejb.updateUser(user)) {
			log.error("Error during update user: " + user.getUsername());
			return Response.serverError().build();
		}
		
		if (file.delete()) {
			log.debug("Temp file was deleted");
		} else {
			log.error("Cannot delete temp file");
		}
		
		log.debug("Update Avatar completed");
    	return Response.ok().build();
    }
    
    
    
    private void setError(int error, String msg) {
    	try {
			servletResponse.sendError(error, msg);
		} catch (IOException e) {
			log.error(e);
			throw new RuntimeException(e);
		}
    }
    
}