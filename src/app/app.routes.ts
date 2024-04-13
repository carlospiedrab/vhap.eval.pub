import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashComponent } from "./dash/dash.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dash", component: DashComponent },
];
