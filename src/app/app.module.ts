import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: CarComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  declarations: [AppComponent, CarComponent, ContactsComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
