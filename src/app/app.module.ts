import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import {ContactComponent} from './modules/contact/contact.component';
import { AppHeaderComponent } from './modules/navigation/app-header/app-header.component';
import { AboutComponent } from './modules/about/about.component';
import { NavBarComponent } from './modules/navigation/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './modules/search/search-box/search-box.component';

// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NavBarComponent,
    SearchBoxComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // StoreModule.forRoot({ count: counterReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
