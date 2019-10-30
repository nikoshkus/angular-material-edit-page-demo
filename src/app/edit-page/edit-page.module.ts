import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component.ts';
import { EditHeaderModule } from '../header/header.module';
import { EditFooterModule } from '../footer/footer.module';
import { EditBodyModule } from '../edit-body/edit-body.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule ({
  imports: [
    CommonModule,
    EditBodyModule,
    EditFooterModule,
    EditHeaderModule,
    BrowserAnimationsModule
  ],
  declarations: [
    EditPageComponent
  ],
  exports: [
    EditPageComponent
  ]
})
export class EditPageModule {}
