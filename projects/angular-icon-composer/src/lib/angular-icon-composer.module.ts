import { NgModule } from '@angular/core';
import { AngularIconComposerComponent } from './angular-icon-composer.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AngularIconComposerComponent
  ],
  imports: [
    MatIconModule, CommonModule
  ],
  exports: [
    AngularIconComposerComponent
  ]
})
export class AngularIconComposerModule { }
