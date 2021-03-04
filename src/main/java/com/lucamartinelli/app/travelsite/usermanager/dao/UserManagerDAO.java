package com.lucamartinelli.app.travelsite.usermanager.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.enterprise.context.SessionScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.usermanager.vo.UserVO;

import io.agroal.api.AgroalDataSource;
import io.quarkus.arc.Unremovable;

@SessionScoped
@Unremovable
@Default
public class UserManagerDAO {
	
	public static final String USER_DATA_QUERY = "SELECT * FROM USERS WHERE username = ?";
	public static final String UPDATE_USER_INIT = "UPDATE users ";
	
	private AgroalDataSource datasource = null;
	
	@Inject
	Logger log;
	
	@PostConstruct
	void init() {
		datasource = CDI.current().select(AgroalDataSource.class).get();
	}
	
	
	public boolean updateUser(final UserVO user) throws SQLException {
		boolean status = false;
		String prepareUpdateQuery = prepareUpdate(user);
		log.debug(prepareUpdateQuery + " --> using [user=" + user + "]");
		// Not all params are mandatory, update only selected
		try (Connection connection = datasource.getConnection();
				PreparedStatement ps = connection.prepareStatement(prepareUpdateQuery)) {
			int i = 0;
			if (user.getName() != null && !user.getName().isEmpty())
				ps.setString(++i, user.getName());
			if (user.getSurname() != null && !user.getSurname().isEmpty())
				ps.setString(++i, user.getSurname());
			if (user.getCountry() != null && !user.getCountry().isEmpty())
				ps.setString(++i, user.getCountry());
			if (user.getEmail() != null && !user.getEmail().isEmpty())
				ps.setString(++i, user.getEmail());
			if (user.getBirthdate() != null && !user.getBirthdate().isEmpty())
				ps.setString(++i, user.getBirthdate());
			if (user.getAvatar() != null && !user.getAvatar().isEmpty())
				ps.setString(++i, user.getAvatar());
			
			ps.setString(++i, user.getUsername());
			log.debug("Inserted " + i + " fields");
			final int rowsUpdate = ps.executeUpdate();
			
			log.info("Rows updated: " + rowsUpdate);
			
			if (rowsUpdate == 1) {
				log.debug("User " + user.getUsername() + " updated");
				status = true;
			} else {
				log.error("The update result is not 1, please check the data for user "
						+ user.getUsername());
				status = false;
			}
			
		} catch (SQLException e) {
			log.error("Update user failed! ", e);
			status = false;
		} finally {
			log.debug("Update finished, return status [" + status + "]");
		}
		
		return status;
	}
	
	
	public UserVO getUserInfo(final String username) throws SQLException {
			UserVO user = null;
			log.debug(USER_DATA_QUERY + " --> using [username=" + username + "]");
			
			try (Connection connection = datasource.getConnection();
					PreparedStatement ps = connection.prepareStatement(USER_DATA_QUERY)) {
				ps.setString(1, username);
				try (ResultSet rs = ps.executeQuery()) {
					if (rs.next()) {
						user = new UserVO(
								rs.getString("USERNAME"), 
								rs.getString("EMAIL"), 
								splitGroups(rs.getString("GROUPS")),
								rs.getString("BIRTHDATE"),
								rs.getString("NAME"),
								rs.getString("SURNAME"),
								rs.getString("COUNTRY"),
								rs.getString("AVATAR"));
					} else {
						log.warn("Query return NO RESULT for user " + username);
					}
				}
				
			} catch (SQLException e) {
				log.error("Error in USER query: ", e);
				throw e;
			}
			
			return user;
	}
	
	
	private Set<String> splitGroups(final String fromDB) {
		if (fromDB == null || fromDB.trim().isEmpty())
			return new HashSet<>(0);
		if (!fromDB.contains(";")) {
			final Set<String> r = new HashSet<>(1);
			r.add(fromDB);
			return(r);
		}
		return new HashSet<>(Arrays.asList(fromDB.split(";")));
	}
	
	private String prepareUpdate(UserVO user) {
		final StringBuffer sb = new StringBuffer(UPDATE_USER_INIT);
		if (user.getName() != null && !user.getName().isEmpty())
			sb.append("SET NAME = ? ");
		if (user.getSurname() != null && !user.getSurname().isEmpty())
			sb.append("SET SURNAME = ? ");
		if (user.getCountry() != null && !user.getCountry().isEmpty())
			sb.append("SET COUNTRY = ? ");
		if (user.getEmail() != null && !user.getEmail().isEmpty())
			sb.append("SET EMAIL = ? ");
		if (user.getBirthdate() != null && !user.getBirthdate().isEmpty())
			sb.append("SET BIRTHDATE = ? ");
		if (user.getAvatar() != null && !user.getAvatar().isEmpty())
			sb.append("SET AVATAR = ? ");
		return sb.append("WHERE USERNAME = ?").toString();
	}
	
	
}
