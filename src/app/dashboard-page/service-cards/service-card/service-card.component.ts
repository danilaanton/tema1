import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() card!: Service;
}
