import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Dependency/welcome/welcome.component';
import { CitizenIdComponent } from './Class testing/citizen-id/citizen-id.component';
import { LightbulbComponent } from './DOM testing/lightbulb/lightbulb.component';
import { ListComponent } from './Routing Component/list/list.component';
import { DetailComponent } from './Routed Component/detail/detail.component';

const routes: Routes = [
  {
    path: 'citizenid',
    component: CitizenIdComponent
  },
  {
    path: 'lightbulb',
    component: LightbulbComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'users',
    component: ListComponent
  },
  {
    path: 'users/:id',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: '/citizenid',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/citizenid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
