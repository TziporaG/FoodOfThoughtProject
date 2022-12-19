import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ArrangeMealComponent } from './arrange-meal/arrange-meal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { OAuth2Client } from 'google-auth-library';
import { calendar_v3 } from 'googleapis';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "arrange-meal",
    component: ArrangeMealComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArrangeMealComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: OAuth2Client,
      useValue: new OAuth2Client(
    // You get this in GCP project credentials
    
    "608308272824-vp09knco4cp7ulq99pbli0tuetmofj9m.apps.googleusercontent.com",
        "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",
    // URL where you'll handle succesful authentication
        "http://localhost",
    ),
    },{
      provide: calendar_v3.Calendar,
      useFactory: 
        (auth: OAuth2Client) => new calendar_v3.Calendar({ auth }),
      deps: [OAuth2Client],
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('608308272824-vp09knco4cp7ulq99pbli0tuetmofj9m.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
