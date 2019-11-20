import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { APP_ROUTING } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CategoriesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
