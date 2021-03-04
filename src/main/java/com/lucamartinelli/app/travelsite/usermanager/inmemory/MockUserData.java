package com.lucamartinelli.app.travelsite.usermanager.inmemory;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

public class MockUserData {
	
	private static final String AVATAR = "/9j/4AAQSkZJRgABAQEAXwBfAAD/4QBoRXhpZgAATU0AKgAAAA"
			+ "gABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAAB"
			+ "fAAAAAQAAAF8AAAABcGFpbnQubmV0IDQuMi4xNQAA/9sAQwAyIiUsJR8yLCksODUyO0t9UUtFRUuZ"
			+ "bXNafbWfvruyn6+syOH/88jU/9esr/r//f///////8Hw/////////////9sAQwE1ODhLQkuTUVGT/"
			+ "86vzv///////////////////////////////////////////////////////////////////8AAEQ"
			+ "gBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwM"
			+ "CBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYn"
			+ "KCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYm"
			+ "Zqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v"
			+ "/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgM"
			+ "RBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVG"
			+ "R0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKzt"
			+ "LW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A1K"
			+ "KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo"
			+ "oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA"
			+ "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"
			+ "iigAooooAKKKKACiiigAooooAKKKKAP/Z";
	
	public static final Map<String, String> USERS = new HashMap<>();
	
	static {
		USERS.put("admin", "secret1");
		USERS.put("premium", "secret1");
		USERS.put("luca", "secret1");
	}
	
	public static final List<UserVO> USERS_DATA = Arrays.asList(new UserVO[] {
			new UserVO(
				"admin",
				"admin@mail.com",
				new HashSet<>(Arrays.asList(new String[] {"admin", "premium", "user"})),
				"1970-01-01",
				"Admin",
				"SuperUser",
				"New York, USA",
				AVATAR),
			new UserVO(
				"premium",
				"premiumuser@mail.com",
				new HashSet<>(Arrays.asList(new String[] {"premium", "user"})),
				"1990-01-01",
				"Premium",
				"GreatUser",
				"Berlin, Germany",
				AVATAR),
			new UserVO(
				"luca",
				"luca.martinelli7cc@gmail.com",
				new HashSet<>(Arrays.asList(new String[] {"user"})),
				"1996-02-12",
				"Luca",
				"Martinelli",
				"Bergamo, Italy",
				AVATAR)
	});
	
	
	public static UserVO getUserData(String username) {
		for (UserVO u : USERS_DATA) {
			if (u.getUsername().equalsIgnoreCase(username))
				return u;
		}
		
		return null;
	}
	
	public static boolean updateUser(final UserVO newUser) {
		if (newUser == null ||
				newUser.getUsername() == null ||
				newUser.getUsername().isEmpty()) {
			return false;
		}
		final UserVO oldUser = getUserData(newUser.getUsername());
		
		// Adding missing information (not mandatory) inside the new user structure
		if (newUser.getName() == null)
			newUser.setName(oldUser.getName());
		if (newUser.getSurname() == null)
			newUser.setSurname(oldUser.getSurname());
		if (newUser.getEmail() == null)
			newUser.setEmail(oldUser.getEmail());
		if (newUser.getBirthdate() == null)
			newUser.setBirthdate(oldUser.getBirthdate());
		if (newUser.getAvatar() == null)
			newUser.setAvatar(oldUser.getAvatar());
		if (newUser.getCountry() == null)
			newUser.setCountry(oldUser.getCountry());
		
		// Overwriting not editable fields
		newUser.setGroups(oldUser.getGroups());
		
		USERS_DATA.remove(oldUser);
		USERS_DATA.add(newUser);
		
		return true;
	}
	
}
