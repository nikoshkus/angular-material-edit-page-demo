import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHeaderComponent } from './header.component';

@NgModule ({
  imports: [
    CommonModule
  ],
  declarations: [
    EditHeaderComponent
  ],
  exports: [
    EditHeaderComponent
  ]
})
export class EditHeaderModule {}