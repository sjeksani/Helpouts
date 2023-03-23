import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import {ContactComponent} from './components/Contact/contact.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    ContactComponent
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
