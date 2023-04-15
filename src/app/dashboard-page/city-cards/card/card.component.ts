import { Component, Input } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityPopulateService } from 'src/app/services/city-populate.service';
import { CitySelectionService } from 'src/app/services/city-selection.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: City;

  constructor(private citySelectionService: CitySelectionService) {}

  subjectCity() {
    this.citySelectionService.visitNow(this.card);
  }
}
