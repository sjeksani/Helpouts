import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { EducationComponent } from './modules/education/education.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }, 
{ path: 'contact', component: ContactComponent },
{ path: 'experience', component: ExperienceComponent },
{ path: 'education', component: EducationComponent },
{ path: 'about', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
