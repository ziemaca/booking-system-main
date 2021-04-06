import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingsComponent} from '../app/bookings/bookings.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{path: 'bookings', component: BookingsComponent},
{path: '', component: LandingPageComponent}, 
{path: 'contact', component: ContactComponent}, 
{path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
