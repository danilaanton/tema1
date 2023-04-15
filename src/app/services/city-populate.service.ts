import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityPopulateService {
  cityList: Subject<City[]> = new Subject<City[]>();

  setCityList(list: City[]) {
    this.cityList.next(list);
  }
}
