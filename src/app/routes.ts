import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';

const ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'categories', component: CategoriesComponent },
   { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
   { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
