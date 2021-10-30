import { AuthGuard } from './login/authGuard.component';
import { LoadingSpinnerComponent } from './http-interceptor/loading-spinner.component';
import { MaterialModule } from './material/material.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DetailsComponent } from './details/details.component';
import { CarsRowComponent } from './cars-row/cars-row.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ServerErrorInterceptor } from './http-interceptor/http-interceptor.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    DetailsComponent,
    CarsRowComponent,
    ModalWindowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MaterialModule,
    SvgIconsModule.forRoot({
      icons: [],
    }),
    NgbModule,

 
  ],
  providers: [
    { provide: ErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingSpinnerComponent, multi: true },
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
