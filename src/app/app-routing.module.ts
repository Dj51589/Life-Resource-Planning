import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashbaordComponent } from './component/home/home-dashbaord/home-dashbaord.component';
import { GenericInfoComponent } from './component/generic-info/generic-info.component';
import { FinanceComponent } from './component/finance/finance.component';
import { HealthComponent } from './component/health/health.component';
import { CarrerComponent } from './component/carrer/carrer.component';
import { ReportsComponent } from './component/reports/reports.component';
import { AppsComponent } from './component/apps/apps.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
const routes: Routes = [
  { path: 'home', component: HomeDashbaordComponent },
  { path: 'generaicInfo', component: GenericInfoComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'health', component: HealthComponent },
  { path: 'carrer', component: CarrerComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'apps', component: AppsComponent },
  { path: '', component: HomeDashbaordComponent, pathMatch: 'full' }
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
