import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './page/favorites-page/favorites-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
