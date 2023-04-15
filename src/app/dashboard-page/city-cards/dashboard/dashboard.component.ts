import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { City } from '../../../models/city';
import { Service } from 'src/app/models/service';
import { CityPopulateService } from 'src/app/services/city-populate.service';
import { CitySelectionService } from 'src/app/services/city-selection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() cards!: City[];
  visibleCards!: City[];

  leftDisabled: boolean = true;
  rightDisabled: boolean = true;
  pageStep: number = 0;

  constructor(
    private cityPopulateService: CityPopulateService,
    private citySelectionService: CitySelectionService
  ) {}

  ngOnInit() {
    this.setCityList();
  }

  setCityList() {
    this.cityPopulateService.cityList.subscribe((cities: City[]) => {
      this.updateCityList(cities);
    });
  }

  updateCityList(cities: City[]) {
    if (cities.length > 6) this.rightDisabled = false;
    else this.rightDisabled = true;
    this.leftDisabled = true;

    this.pageStep = 0;

    this.cards = cities;

    this.sliceStep(this.pageStep);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / 6);
  }

  stepNext() {
    this.pageStep++;

    if (this.pageStep + 1 == this.totalPages) this.rightDisabled = true;

    if (this.leftDisabled == true) this.leftDisabled = false;

    this.sliceStep(this.pageStep);
  }

  stepPrev() {
    this.pageStep--;

    if (this.pageStep == 0) this.leftDisabled = true;

    if ((this.rightDisabled = true)) this.rightDisabled = false;

    this.sliceStep(this.pageStep);
  }

  sliceStep(num: number) {
    this.visibleCards = this.cards.slice(num * 5, num * 5 + 6);
  }

  visitNowCity(city: City) {
    this.citySelectionService.visitNow(city);
  }
}
