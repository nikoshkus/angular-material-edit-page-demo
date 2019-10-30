import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { EditPageModule } from './edit-page/edit-page.module';

import { MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    EditPageModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class MyAppModule { }

