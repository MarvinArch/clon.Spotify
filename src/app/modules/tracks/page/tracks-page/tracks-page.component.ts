import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@dataJson/traks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTracksList: Array<TrackModel> = [
    
  ]
  ngOnInit(): void {
    const {data}: any = (dataRaw as any ).default
    this.mockTracksList = data
  }
}
