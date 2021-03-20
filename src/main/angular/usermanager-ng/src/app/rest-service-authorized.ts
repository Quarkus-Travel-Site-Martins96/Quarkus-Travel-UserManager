import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieManager } from './cookie-utils';
import { RestService } from './rest-service';


@Injectable({
	providedIn: 'root'
})
export class RestServiceAuthorized {

	constructor(private rest: RestService, private cookieMng: CookieManager) { }

	sendPostGetRawText(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<string>> {
		headers = this.createAuthorizationHeader(headers);
		// call
		return this.rest.sendPostGetRawText(url, body, headers);
	}

	sendPostWithString(url: string, body: string, headers: HttpHeaders): Observable<HttpResponse<any>> {
		headers = this.createAuthorizationHeader(headers);
		return this.rest.sendPostWithString(url, body, headers);
	}

	sendPost<T>(url: string, body: any, headers?: HttpHeaders): Observable<HttpResponse<T>> {
		if (!headers)
			headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.rest.sendPost<T>(url, body, headers);
	}

	sendGet<T>(url: string, headers: HttpHeaders): Observable<HttpResponse<T>> {
		headers = this.createAuthorizationHeader(headers);
		console.log(headers);
		return this.rest.sendGet<T>(url, headers);
	}


	private createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
		let jwt: string = this.cookieMng.getCookie('user.jwt');
		console.log("JWT: " + jwt)
		jwt = 'Bearer ' + jwt
		if (jwt)
			headers = headers.append('Authorization', jwt);
		return headers;
	}
}
