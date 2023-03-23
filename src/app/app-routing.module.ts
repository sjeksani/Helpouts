import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/About/about.component';
import { ContactComponent } from './components/Contact/contact.component';
import { EducationComponent } from './components/Education/education.component';
import { ExperienceComponent } from './components/Experience/experience.component';
import { HomeComponent } from './components/Home/home.component';

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
