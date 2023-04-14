import { Component } from '@angular/core';
import { City } from '../../models/city';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  defaultCity:City ={
    name : 'New Adventure',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit est, viverra at lectus sed, fringilla pretium neque.',
    image : 'https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'
  };

  selectedCity!:City;

  constructor(){};

  ngOnInit(){
    this.selectedCity = this.defaultCity;
  };
}
