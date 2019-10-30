import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTemplateComponent } from './task-template.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatChipsModule
} from '@angular/material';
import { MatSelectSearchModule } from './../mat-select-search/mat-select-search.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule ({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectSearchModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  declarations: [
    TaskTemplateComponent,
  ],
  exports: [
    TaskTemplateComponent
  ]
})
export class TaskTemplateModule {}
