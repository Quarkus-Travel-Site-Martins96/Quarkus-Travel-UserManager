package com.lucamartinelli.app.travelsite.usermanager.health;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.eclipse.microprofile.config.ConfigProvider;
import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;
import org.eclipse.microprofile.health.Readiness;

@Liveness
@Readiness
public class HealthService implements HealthCheck {

	@Override
	public HealthCheckResponse call() {
		final String mode = ConfigProvider.getConfig()
				.getOptionalValue("usermanager.mode", String.class).orElse("IN_MEMORY");
		final boolean configuredDone = mode != null &&
				(mode.equalsIgnoreCase("IN_MEMORY") || mode.equalsIgnoreCase("DB"));
		final String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
		
		return HealthCheckResponse.builder()
				.name("usermanager-service-check")
				.withData("usermanager.mode", mode)
				.withData("date", date)
				.state(configuredDone)
				.build();
	}

}
