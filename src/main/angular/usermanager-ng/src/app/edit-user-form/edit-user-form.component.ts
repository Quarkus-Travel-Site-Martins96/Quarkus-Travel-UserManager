import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { firstValueFrom, Observable, Subscription } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { AppDateAdapter, maxDate, APP_DATE_FORMATS, DateUtils } from '../material/app-date-adapter';
import { RestServiceAuthorized } from '../rest-service-authorized';
import { UserVO } from '../vo/user-inteface-vo';

@Component({
	selector: 'app-edit-user-form',
	templateUrl: './edit-user-form.component.html',
	styleUrls: ['./edit-user-form.component.css'],
	providers: [
		{provide: DateAdapter, useClass: AppDateAdapter},
    	{provide: MAT_DATE_FORMATS, useClass: AppDateAdapter, useValue: APP_DATE_FORMATS}
	]
})
export class EditUserFormComponent implements OnInit {

	private hostUM: string;
	private hostHome: string;
	private avatarManagerUrl: string;
	private userManagerUrl: string;
	private getUserDataUrl: string;	
	
	errorBE: boolean = false;
	errorBEMsg: string;

	maxDate = maxDate;
	birthdateDate: Date;
	user: UserVO = new UserVO();

	private modifyUserSub: Subscription;
	private changeAvatarSub: Subscription;

	name: string;
	surname: string;
	country: string;
	birthdate: string;
	email: string;
	avatar: File | null;

	constructor(private rest: RestServiceAuthorized) {
		this.hostUM = Environment.getUserManagerHost();
		this.hostHome = Environment.getHomeHost();
		this.avatarManagerUrl = this.hostUM + '/usermanager/update-image';
		this.userManagerUrl = this.hostUM + '/usermanager/update';
		this.getUserDataUrl = this.hostUM + '/usermanager';
	}

	ngOnInit(): void {

		const obsv: Observable<HttpResponse<UserVO>> = this.rest.sendGet<UserVO>(this.getUserDataUrl, new HttpHeaders({
				Accept: 'application/json'
			}));

		firstValueFrom(obsv)
			.then(resp => {
				this.user = resp.body;
				if (this.user && this.user.birthdate)
					this.birthdateDate = new Date(this.user.birthdate);
			}, err => {
				console.error(err);
				if (err.status === 401 || err.status === 403) {
					console.log("Unauthorized access, login is required");
					location.href = this.hostHome;
				}
				this.errorBE = true;
				this.errorBEMsg = this.getError(err.error);
			})
	}


	update(): void {
		let userRequest: UserVO = new UserVO();

		userRequest.username = this.user.username;

		if (this.name && this.name.trim() !== "") {
			userRequest.name = this.name;
		}
		if (this.surname && this.surname.trim() !== "") {
			userRequest.surname = this.surname;
		}
		if (this.country && this.country.trim() !== "") {
			userRequest.country = this.country;
		}
		if (this.birthdate && this.birthdate.trim() !== "") {
			userRequest.birthdate = this.birthdate;
		}
		if (this.email && this.email.trim() !== "") {
			userRequest.email = this.email;
		}

		if (this.modifyUserSub)
			this.modifyUserSub.unsubscribe();

		this.modifyUserSub = this.rest.sendPost<any>(this.userManagerUrl, userRequest, new HttpHeaders({
			'Content-Type': 'application/json'
		})).subscribe(() => {
			console.log("Update completed");
			document.getElementById("user-update-button").style.backgroundColor="green";
			document.getElementById("user-update-button-span").innerHTML="Done!";
		}, err => {
			console.error("Update failed")
			this.errorBE = true;
			this.errorBEMsg = this.getError(err.error);
		});

	}

	changeAvatar(): void {
		console.log(this.avatar);
		if (this.changeAvatarSub)
			this.changeAvatarSub.unsubscribe();
			
		if (!this.avatar) {
			document.getElementById("image-error").style.display = "block";
			document.getElementById("image-error-msg").innerHTML = "Please select image";
			return;
		}
			
		console.log("###########");
		console.log(this.avatar);
		console.log(this.avatar.name);
		console.log(this.avatar.size);
		console.log("###########");
		
		
		
		let form = new FormData();
		form.append('avatar', this.avatar);
		form.append('image-type', this.avatar.type);

		this.changeAvatarSub = this.rest.sendPost<any>(this.avatarManagerUrl, form).subscribe(() => {
			location.reload();
		}, err => {
			console.error(err);
			document.getElementById("image-error").style.display = "block";
			document.getElementById("image-error-msg").innerHTML = this.getError(err.error);
		});
	}


	onFileSelect(event: Event) {
		let inputFiles: FileList = (event.target as HTMLInputElement).files;
		if (inputFiles.length > 0) {
			this.avatar = inputFiles[0];
		}
	}
	
	
	private getError(fullMsg: string): string {
		if (!fullMsg)
			return "";
		if (!fullMsg.includes("<body>") && !fullMsg.includes("</body>"))
			return fullMsg;
		
		return fullMsg.split("<body>")[1].split("</body>")[0];
	}
	
	
	OnDateChange(date: Date): void {
		this.birthdate = DateUtils.format(date);
		this.birthdateDate = date;
	}
}
