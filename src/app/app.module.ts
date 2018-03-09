import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HeroComponent} from "./Hero/Hero.component";
import { AppComponent } from './app.component';

import {HeroService} from "./Hero/Hero.service";
import {HerolistComponent} from "./Herolist/Herolist.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HerolistComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'heroes', component: HerolistComponent},
      {path: 'hero/:id', component: HeroComponent},
      {path: 'dashboard', component: DashboardComponent}
    ])
  ],
  providers: [ HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
