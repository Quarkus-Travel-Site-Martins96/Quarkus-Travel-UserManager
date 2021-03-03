package com.lucamartinelli.app.travelsite.usermanager;

import javax.annotation.PostConstruct;
import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Provider;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerDBEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerEJB;
import com.lucamartinelli.app.travelsite.usermanager.ejb.UserManagerInMemoryEJB;
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
	HttpServletResponse response;
	
	@PostConstruct
	public void init() {
		log.debug("Login service is loaded with mode [" + mode + "]");
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
        return ejb.getUserData(jwt.getClaim("upn"));
    }
    
}