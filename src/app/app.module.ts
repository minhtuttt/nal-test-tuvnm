import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './users/user.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NoopAnimationsModule,
    // MatPaginatorModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
