import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkinsRoutingModule } from './skins-routing.module';
import { SkinsListComponent } from './skins-list/skins-list.component';


@NgModule({
  declarations: [
    SkinsListComponent
  ],
  imports: [
    CommonModule,
    SkinsRoutingModule
  ]
})
export class SkinsModule { }
