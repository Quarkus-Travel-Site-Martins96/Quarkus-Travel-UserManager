package com.lucamartinelli.app.travelsite.usermanager;

import java.io.IOException;

import javax.annotation.PostConstruct;
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

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerDBEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerInMemoryEJB;
import com.lucamartinelli.app.travelsite.usermanager.utils.ValidateInput;
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
    		setError(401, "Request is not valid: " + validateError);
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
    
    
    
    private void setError(int error, String msg) {
    	try {
			servletResponse.sendError(error, msg);
		} catch (IOException e) {
			log.error(e);
			throw new RuntimeException(e);
		}
    }
    
}