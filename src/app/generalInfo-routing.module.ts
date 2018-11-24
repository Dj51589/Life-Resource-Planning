import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './component/general-info/general-info.component';
import { HomeHeaderComponent } from './component/home/home-header/home-header.component';
import { HomeBannerComponent } from './component/home/home-banner/home-banner.component';

const routes: Routes = [
  {
    path: 'generalInfo',
    component: GeneralInfoComponent,
    children: [
      {
        path: 'address',
        component: HomeHeaderComponent
      },
      {
        path: 'communications',
        component: HomeBannerComponent
      },
      {
        path: 'personalIDs',
        component: HomeHeaderComponent
      },
      {
          path: 'memberships',
        component: HomeBannerComponent
      },
      {
        path: 'loanobjects',
        component: HomeHeaderComponent
      },
      {
        path: 'travelinfo',
        component: HomeBannerComponent
      },
      {
        path: 'documents',
        component: HomeHeaderComponent
      },
      {
        path: 'leisureactivities',
        component: HomeBannerComponent
      }
    ]
  }
];

@core.NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralInfoRoutingModule { }
