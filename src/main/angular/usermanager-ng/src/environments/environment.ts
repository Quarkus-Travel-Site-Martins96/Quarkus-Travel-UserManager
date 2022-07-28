// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Injectable } from '@angular/core';

export const environment = {
  production: false
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
@Injectable({
	providedIn: 'root'
})
export class Environment {
	
	private constructor() { }
	
	public static getHomeHost(): string {
		return 'http://localhost:8080';
	}
	
	public static getHotelHost(): string {
		return 'http://localhost:8081';
	}
	
	public static getLoginHost(): string {
		return 'http://localhost:7070';
	}
	
	public static getUserManagerHost(): string {
		return "http://localhost:7071";
	}

	public static getRegistrationHost(): string {
		return "http://localhost:7171";
	}

	public static getStaticContentHost(): string {
		return "https://localhost:5000";
	}
	
}