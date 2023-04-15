import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { CardComponent } from './city-cards/card/card.component';
import { DashboardComponent } from './city-cards/dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TitleComponent } from './title/title.component';
import { ServicesListComponent } from './service-cards//services-list/services-list.component';
import { ServiceCardComponent } from './service-cards/service-card/service-card.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CardComponent,
    DashboardComponent,
    MainPageComponent,
    TitleComponent,
    ServicesListComponent,
    ServiceCardComponent,
    SearchComponent,
  ],
  imports: [CommonModule, DashboardModuleRoutingModule, FormsModule],
})
export class DashboardModuleModule {}
