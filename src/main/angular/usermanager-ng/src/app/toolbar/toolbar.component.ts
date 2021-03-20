import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { homePageUrl, loginPageUrl, userManagementPageUrl } from 'src/environments/environment';
import { CookieManager } from '../cookie-utils';
import { RestService } from '../rest-service';
import { JWT } from './jwt-decode-vo';

const validateUrl: string = loginPageUrl + "/validate";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

	homeUrl: string = homePageUrl;
	loginUrl: string = loginPageUrl;
	userManagementUrl: string = userManagementPageUrl;

	jwt: JWT = new JWT();
	cookieJWT: string;

	private sub: Subscription;

	constructor(private cookieMng: CookieManager, private rest: RestService) {
		this.cookieJWT = this.cookieMng.getCookie('user.jwt');
	}


	ngOnInit(): void {
		if (this.sub)
			this.sub.unsubscribe();

		if (this.cookieJWT) {

			//JWT found, check if is valid
			this.sub = this.rest.sendPost<JWT>(validateUrl, this.cookieJWT, new HttpHeaders({
				'content-type': 'text/plain'
			}))
				.subscribe((resp) => {
					//JWT correct, move to Home Page
					this.jwt = resp.body;
				}, error => {
					//JWT non correct or service not available
					if (error.status === 401) {
						console.error('The token JWT is not valid, relogin required', error)
						this.cookieMng.deleteCookie('user.jwt');
						this.jwt = null;
					} else {
						console.error('The call is not end correct', error)
						this.jwt = null;
					}
				})
		}
	}

	ngAfterViewInit(): void {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-80px";
			}
			prevScrollpos = currentScrollPos;
		}
	}

}
