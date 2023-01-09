import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { MediaPlayerComponent } from './componets/media-player/media-player.component';
import { HeaderUserComponent } from './componets/header-user/header-user.component';
import { CardPlayerComponent } from './componets/card-player/card-player.component';
import { SectionGenericComponent } from './componets/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './componets/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './componets/play-list-body/play-list-body.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ]
})
export class SharedModule { }
