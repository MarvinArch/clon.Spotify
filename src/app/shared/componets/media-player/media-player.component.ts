import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel ={
    name: 'Highway to Hell',
    album: 'Highway to Hell',
    cover: 'https://www.reddeeradvocate.com/wp-content/uploads/2020/11/23319324_web1_201113-RDA-ACDC-is-back-and-fighting-off-the-black-with-new-album-music_1.jpg',
    url: '',
    _id: 1
  }
}
