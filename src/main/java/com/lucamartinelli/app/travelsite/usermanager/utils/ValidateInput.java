package com.lucamartinelli.app.travelsite.usermanager.utils;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

public class ValidateInput {
	
	private static final Logger log = Logger.getLogger(ValidateInput.class.getCanonicalName());
	
	/**
	 * Validate the input for update service, if the return string
	 * is <code>null</code> the input is correct, otherwise the
	 * error description will be returned as String
	 */
	public static String validateForUpdate(UserVO user) {
		log.debug("validating user: " + user);
		if (user == null || user.equals(new UserVO())) {
			log.warn("User is empty");
			return "User is empty";
		}
		if (user.getUsername() == null || user.getUsername().isBlank()) {
			log.warn("Username missing");
			return new String("Username missing");
		}
		final String birthdate = user.getBirthdate();
		if (birthdate != null) {
			if (birthdate.length() != 10 ||
					!birthdate.matches("\\d{2}-\\d{2}-\\d{4}")) {
				log.warn("Birthdate is not correct, expected format \"dd-mm-yyyy\"");
				return "Birthdate is not correct, expected format \"dd-mm-yyyy\"";
			}
		}
		
		return null;
	}
	
	
	
}
