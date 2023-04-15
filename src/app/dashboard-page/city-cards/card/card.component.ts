import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() visitNowEmitter:EventEmitter<City> = new EventEmitter<City>;


  emitCity() {
    this.visitNowEmitter.emit(this.card);
  }
}
