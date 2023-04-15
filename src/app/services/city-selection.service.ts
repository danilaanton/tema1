import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class CitySelectionService {
  selectedCity: Subject<City> = new Subject<City>();

  constructor() {}

  visitNow(city: City) {
    this.selectedCity.next(city);
  }
}
