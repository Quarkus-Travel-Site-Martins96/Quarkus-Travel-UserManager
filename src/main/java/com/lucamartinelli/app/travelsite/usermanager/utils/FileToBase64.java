package com.lucamartinelli.app.travelsite.usermanager.utils;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

import org.apache.commons.io.FileUtils;
import org.jboss.logging.Logger;

public class FileToBase64 {
	
	private static final Logger log = Logger.getLogger(FileToBase64.class.getCanonicalName());
	
	public static String encode(final File file, final String base64Prefix) {
		try {
			String base64 = Base64.getEncoder()
					.encodeToString(FileUtils.readFileToByteArray(file));
		    base64 = base64Prefix + base64;
		    return base64;
		} catch (IOException e) {
			log.error("Failing convert file to base64");
			return null;
		}
	}
	
	public static String getPrefix(final String fileType) {
		switch (fileType) {
		case "image/jpeg":
		case "image/jpg":
		case "image/png":
		case "image/bmp":
		case "image/gif":
		case "image/eps":
			return "data:" + fileType + ";base64,";

		default:
			return null;
		}
	}
	
	
}
