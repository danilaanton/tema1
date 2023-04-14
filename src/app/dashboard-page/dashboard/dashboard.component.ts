import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../../models/city';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

@Input() cards!: City[];

constructor(){
}

ngOnInit(){
}

}
