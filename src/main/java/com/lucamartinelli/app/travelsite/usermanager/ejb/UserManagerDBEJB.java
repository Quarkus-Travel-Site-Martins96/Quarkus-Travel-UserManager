package com.lucamartinelli.app.travelsite.usermanager.ejb;

import java.sql.SQLException;

import javax.enterprise.context.SessionScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.dao.UserManagerDAO;
import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

@SessionScoped
public class UserManagerDBEJB implements UserManagerEJB {
	
	@Inject
	Logger log;
	

	@Override
	public UserVO getUserData(String username) {
		final UserManagerDAO dao = CDI.current()
				.select(UserManagerDAO.class, new Default.Literal()).get();
		UserVO user = null;
		try {
			user = dao.getUserInfo(username);
		} catch (SQLException e) {
			log.error("Error durig contact database: ", e);
			throw new RuntimeException(e);
		}
		return user;
	}

}
