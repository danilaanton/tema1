import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './dashboard-page/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () =>
      import('./dashboard-page/dashboard-module.module').then(
        (m) => m.DashboardModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
