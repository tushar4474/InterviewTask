import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentSecondComponent } from './component-second/component-second.component';
import { ComponentThirdComponent } from './component-third/component-third.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NewdirectiveDirective } from './directive/newdirective.directive';
import {HttpClientModule} from '@angular/common/http';
import { CityService } from './services/city.service';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ComponentSecondComponent,
    ComponentThirdComponent,
    HeaderComponent,
    NewdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
