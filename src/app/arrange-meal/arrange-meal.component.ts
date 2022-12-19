import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { calendar_v3 } from 'googleapis';
@Component({
  selector: 'app-arrange-meal',
  templateUrl: './arrange-meal.component.html',
  styleUrls: ['./arrange-meal.component.scss'],
})
export class ArrangeMealComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private calendar: calendar_v3.Calendar,
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
    this.calendar.events.list({
      // required, it is an email, or email like id of a calendar
      calendarId: "tziporag93@gmail.com",
    // optional, arguments that let you filter/specify wanted events
      // timeMin: startOfDay(today).toISOString(),
      // timeMax: endOfDay(today).toISOString(),
      showDeleted: false,
      singleEvents: true,
    })
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
