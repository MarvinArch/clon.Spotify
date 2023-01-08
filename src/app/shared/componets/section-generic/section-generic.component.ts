import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  //la anotacion input permite el paso un dato de parametro
  @Input() title: string =''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: any
}
