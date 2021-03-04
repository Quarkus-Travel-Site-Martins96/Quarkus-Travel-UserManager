package com.lucamartinelli.app.travelsite.usermanager.ejb;

import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

public interface UserManagerEJB {
	
	public UserVO getUserData(String username);
	
	public boolean updateUser(UserVO user);
	
}
