import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './_services/config.service'; // service 新增
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components/components.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from "./components/layout/layout.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentsComponent,
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule
  ]
})
export class AppModule { }
