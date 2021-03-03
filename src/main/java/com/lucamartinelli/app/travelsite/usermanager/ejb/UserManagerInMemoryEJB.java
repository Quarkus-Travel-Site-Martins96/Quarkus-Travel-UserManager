package com.lucamartinelli.app.travelsite.usermanager.ejb;

import javax.enterprise.context.SessionScoped;

import com.lucamartinelli.app.travelsite.usermanager.inmemory.MockUserData;
import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

@SessionScoped
public class UserManagerInMemoryEJB implements UserManagerEJB {

	@Override
	public UserVO getUserData(String username) {
		return MockUserData.getUserData(username);
	}

}
