import { Component } from '@angular/core';
import { City } from '../../models/city';
import { CitySelectionService } from 'src/app/services/city-selection.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  defaultCity: City = {
    name: 'New Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit est, viverra at lectus sed, fringilla pretium neque.',
    image:
      'https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg',
  };

  selectedCity!: City;

  constructor(private citySelectionService: CitySelectionService) {}

  ngOnInit() {
    this.selectedCity = this.defaultCity;
    this.setSelectedCity();
  }

  setSelectedCity() {
    this.citySelectionService.selectedCity.subscribe((city: City) => {
      this.selectedCity = city;
    });
  }

  openNewTab() {
    const url = this.selectedCity.image;
    window.open(url, '_blank');
  }
}
