import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.less'],
})
export class SocialNetworkComponent {
  @Input()
  imageUrl: string = '';
}
