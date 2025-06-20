import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { StudentReg } from './students/student-reg/student-reg';
import { StudentDisplay } from './students/student-display/student-display';
import { Nav } from './nav/nav';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    StudentReg,
    StudentDisplay,
    Nav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

