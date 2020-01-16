import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { ROUTER_PROVIDERS } from 'angular2/router';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appRoutes: Routes = [
  // {path:'',component: MainComponent,
  // children:[ 
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '/home' },

  // ]}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NavComponent,
    ResumeComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [
    AppComponent,

  ]

})

export class AppModule { }
