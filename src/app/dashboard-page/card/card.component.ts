import { Component, Input } from '@angular/core';
import { City } from 'src/app/models/city';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!:City|Service;
}
