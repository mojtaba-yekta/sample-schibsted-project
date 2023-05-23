import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.less'],
})
export class OurServiceComponent {
  @Input()
  imageUrl: string = '';
}
