import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@dataJson/traks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  
  @Input() tracks: Array<TrackModel>=[];

  ngOnInit(): void {
    const {data}: any=(dataRaw as any).default
    this.tracks=data
    console.log(data)
    console.log(this.tracks.length+'-----------------------------------------------------')
  }
}
