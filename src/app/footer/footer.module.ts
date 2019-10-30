import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFooterComponent } from './footer.component';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule ({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    EditFooterComponent
  ],
  exports: [
    EditFooterComponent
  ]
})
export class EditFooterModule {}
