import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DetailsComponent } from './details/details.component';
import { CarsRowComponent } from './cars-row/cars-row.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    DetailsComponent,
    CarsRowComponent,
    ModalWindowComponent,
    HttpInterceptorComponent,
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
    NgbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
