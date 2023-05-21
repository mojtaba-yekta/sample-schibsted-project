import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent {
  imageUrls: string[] = ['Apple', 'Orange', 'Banana'];

  constructor() {
    this.imageUrls = [
      `https://picsum.photos/seed/${this.randomInteger()}/1920/1080`,
      `https://picsum.photos/seed/${this.randomInteger()}/1920/1080`,
      `https://picsum.photos/seed/${this.randomInteger()}/1920/1080`,
      `https://picsum.photos/seed/${this.randomInteger()}/1920/1080`,
    ];
  }

  public randomInteger(pMin = 1, pMax = 1_000_000_000) {
    pMin = Math.round(pMin);
    pMax = Math.round(pMax);
    if (pMax < pMin) {
      let t = pMin;
      pMin = pMax;
      pMax = t;
    }
    return Math.floor(Math.random() * (pMax + 1 - pMin) + pMin);
  }
}
