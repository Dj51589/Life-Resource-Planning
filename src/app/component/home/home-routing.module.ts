import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../../auth/auth.guard';

import { HomeDashbaordComponent } from './home-dashbaord/home-dashbaord.component';
import { GenericInfoComponent } from './../../component/generic-info/generic-info.component';
import { FinanceComponent } from '././../../component/finance/finance.component';
import { HealthComponent } from '././../../component/health/health.component';
import { CarrerComponent } from '././../../component/carrer/carrer.component';
import { ReportsComponent } from '././../../component/reports/reports.component';
import { AppsComponent } from '././../../component/apps/apps.component';
import { GeneralInfoComponent } from '././../../component/general-info/general-info.component';
import { DashbaordComponent } from '././../../component/dashbaord/dashbaord.component';

import { HomeHeaderComponent } from '../home/home-header/home-header.component';
import { HomeBannerComponent } from '../home/home-banner/home-banner.component';
import { AddressComponent } from '../address/address.component';
import { AddressDetailComponent } from "../address/address-detail/address-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeDashbaordComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashbaordComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "generaicInfo",
        component: GenericInfoComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "addressDetails/:id",
        component: AddressDetailComponent
      },
      {
        path: "generalInfo",
        component: GeneralInfoComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: "address",
            component: AddressComponent
          },
          {
            path: "communications",
            component: HomeBannerComponent
          },
          {
            path: "personalIDs",
            component: HomeHeaderComponent
          },
          {
            path: "memberships",
            component: HomeBannerComponent
          },
          {
            path: "loanobjects",
            component: HomeHeaderComponent
          },
          {
            path: "travelinfo",
            component: HomeBannerComponent
          },
          {
            path: "documents",
            component: HomeHeaderComponent
          },
          {
            path: "leisureactivities",
            component: HomeBannerComponent
          }
        ]
      },
      {
        path: "finance",
        component: FinanceComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "health",
        component: HealthComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "carrer",
        component: CarrerComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "reports",
        component: ReportsComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "apps",
        component: AppsComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  }
];

@core.NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
