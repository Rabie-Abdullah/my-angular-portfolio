import { ContactMeComponent } from './views/contact-me/contact-me.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myProjects', component: HomeComponent },
  { path: 'experience', component: HomeComponent },
  { path: 'contact-me', component: HomeComponent },

  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
