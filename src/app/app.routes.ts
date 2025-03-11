import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UserPageComponent
  },
  {
    path: "users/:email",
    component: UserDetailsComponent
  }
];
