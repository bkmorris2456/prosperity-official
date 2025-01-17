// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Replace with your actual component

const routes: Routes = [
  { path: '', component: HomeComponent },  // Root path
//   { path: '**', component: PageNotFoundComponent },  // Optional: for 404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
