import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TitleComponent } from './title/title.component';
import { ServicesListComponent } from './services-list/services-list.component';


@NgModule({
  declarations: [
    CardComponent,
    DashboardComponent,
    MainPageComponent,
    TitleComponent,
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
