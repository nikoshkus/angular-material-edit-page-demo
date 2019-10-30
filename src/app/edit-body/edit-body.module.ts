import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBodyComponent } from './edit-body.component.ts';
import {
  MatGridListModule,
  MatTabsModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTemplateModule } from '../task-template/task-template.module';

@NgModule ({
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    TaskTemplateModule
  ],
  declarations: [
    EditBodyComponent
  ],
  exports: [
    EditBodyComponent
  ]
})
export class EditBodyModule {}
