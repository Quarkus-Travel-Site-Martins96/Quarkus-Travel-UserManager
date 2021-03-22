package com.lucamartinelli.app.travelsite.usermanager.utils;

import java.io.File;

import org.eclipse.microprofile.config.ConfigProvider;
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
					!birthdate.matches("\\d{4}-\\d{2}-\\d{2}")) {
				log.warn("Birthdate is not correct, expected format \"yyyy-mm-dd\"");
				return "Birthdate is not correct, expected format \"yyyy-mm-dd\"";
			}
		}
		
		return null;
	}
	
	public static boolean checkAvatarSize(final File f) {
		final long size = f.length() / 1024;
		long max;
		try {
			max = Long.parseLong(ConfigProvider.getConfig()
					.getOptionalValue("usernamanger.avatar.size.max.kb", String.class)
					.orElse("150"));
		} catch (NumberFormatException e) {
			log.warn("Wrong configuration for property 'usernamanger.avatar.size.max.kb', please set a number");
			log.warn("Using default value 150 KB");
			max = 150L;
		}
		log.debug("Input file size: " + size);
		log.debug("max size allowed: " + max);
		if (size > max)
			return false;
		return true;
		
	}

	/**
	 * Read the input structure and check if one or more fields are valued
	 * for the update, if the structure not contains any new data the flow can
	 * skip the update
	 * 
	 * @param user - Input structure
	 * @return <code>true</code> if the structure contains fields for update,
	 *  <code>false</code> if the structure have no new field/s
	 */
	public static boolean updateIsNecessary(UserVO user) {
		if (user.getAvatar() != null && !user.getAvatar().isEmpty())
			return true;
		if (user.getBirthdate() != null && !user.getBirthdate().isEmpty())
			return true;
		if (user.getCountry() != null && !user.getCountry().isEmpty())
			return true;
		if (user.getEmail() != null && !user.getEmail().isEmpty())
			return true;
		if (user.getName() != null && !user.getName().isEmpty())
			return true;
		if (user.getSurname() != null && !user.getSurname().isEmpty())
			return true;
		
		return false;
	}
	
	
	
}
