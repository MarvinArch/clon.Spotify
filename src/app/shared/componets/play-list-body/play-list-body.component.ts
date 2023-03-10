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
  optionsort: {
    property:string |null
    order: string
  }={
    property: null,
    order: 'asc'
  }

  ngOnInit(): void {
    const {data}: any=(dataRaw as any).default
    this.tracks=data
  }

  changesort(property: string): void {
    const { order }= this.optionsort
    this.optionsort ={
      property,
      order: order==='asc' ? 'desc' : 'asc'
    }
  } 
}
