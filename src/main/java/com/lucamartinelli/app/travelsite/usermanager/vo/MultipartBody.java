package com.lucamartinelli.app.travelsite.usermanager.vo;

import java.io.InputStream;

import javax.ws.rs.FormParam;
import javax.ws.rs.core.MediaType;

import org.jboss.resteasy.annotations.providers.multipart.PartType;

public class MultipartBody {
	
	@FormParam("avatar")
    @PartType(MediaType.APPLICATION_OCTET_STREAM)
    public InputStream file;

    @FormParam("image-type")
    @PartType(MediaType.TEXT_PLAIN)
    public String fileType;
	
	
}
