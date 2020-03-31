import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';/*4. register a component if we want to use in html as ele. Note:Omit extension */

@NgModule({
  declarations: [
    AppComponent,
    ContactCreateComponent  //4a. Store in declaration so ng is aware of it

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
