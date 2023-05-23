import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { AboutComponent } from './about/about.component';
import { OurServiceComponent } from './our-service/our-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactFormComponent,
    SocialNetworkComponent,
    AboutComponent,
    OurServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
