import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { host } from 'src/environments/environment';
import { RestServiceAuthorized } from '../rest-service-authorized';
import { UserVO } from '../vo/user-inteface-vo';

const userManagerUrl: string = host + '/usermanager/update';
const getUserDataUrl: string = host + '/usermanager';

@Component({
	selector: 'app-edit-user-form',
	templateUrl: './edit-user-form.component.html',
	styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {
	
	user: UserVO = new UserVO();
	
	private userDataSub: Subscription;

	name: string;
	surname: string;
	country: string;
	birthdate: string;
	email: string;

	constructor(private rest: RestServiceAuthorized) { }

	ngOnInit(): void {
		if (this.userDataSub)
			this.userDataSub.unsubscribe();
			
		this.userDataSub = this.rest.sendGet<UserVO>(getUserDataUrl, new HttpHeaders({
			Accept: 'application/json'
		}))
		.subscribe(resp => {
			this.user = resp.body;
		}, err => {
			console.error(err);
		})
	}
	
	
	update(): void {
		
	}
}
