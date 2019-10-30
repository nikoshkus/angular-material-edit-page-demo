import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit', pathMatch: 'full' },
  { path: 'edit', component: EditPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}