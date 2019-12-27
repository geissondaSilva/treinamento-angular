import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeradorAvatarRoutingModule } from './gerador-avatar-routing.module';
import { GeradorAvatarComponent } from './gerador-avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarDirective } from './directives/avatar.directive';
import { NamePipe } from './pipes/name.pipe';


@NgModule({
  declarations: [
    GeradorAvatarComponent,
    AvatarDirective,
    NamePipe
  ],
  imports: [
    CommonModule,
    GeradorAvatarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class GeradorAvatarModule { }
