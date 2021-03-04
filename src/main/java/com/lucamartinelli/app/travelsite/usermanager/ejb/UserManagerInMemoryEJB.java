package com.lucamartinelli.app.travelsite.usermanager.ejb;

import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.inmemory.MockUserData;
import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

@SessionScoped
public class UserManagerInMemoryEJB implements UserManagerEJB {
	
	@Inject
	Logger log;
	

	@Override
	public UserVO getUserData(String username) {
		return MockUserData.getUserData(username);
	}
	
	@Override
	public boolean updateUser(UserVO user) {
		try {
			if (MockUserData.updateUser(user))
				return true;
		} catch (RuntimeException e) {
			log.error("Error during update user ", e);
		}
		return false;
	}
	
	
}
