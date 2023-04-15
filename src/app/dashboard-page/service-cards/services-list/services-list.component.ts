import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent {
  @Input() cards!: Service[];
}
