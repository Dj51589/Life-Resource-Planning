import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { GeneralInfoRoutingModule } from './generalInfo-routing.module';

import { AppComponent } from './app.component';
import { HomeBannerComponent } from './component/home/home-banner/home-banner.component';
import { HomeHeaderComponent } from './component/home/home-header/home-header.component';
import { HomeDashbaordComponent } from './component/home/home-dashbaord/home-dashbaord.component';
import { DashbaordComponent } from './component/dashbaord/dashbaord.component';
import { LoginComponent } from './component/login/login.component';
import { MessagesComponent } from './component/messages/messages.component';
import { GeneralInfoComponent } from './component/general-info/general-info.component';
import { HeaderNavigationComponent } from './component/header-navigation/header-navigation.component';
import { GenericInfoComponent } from './component/generic-info/generic-info.component';
import { FinanceComponent } from './component/finance/finance.component';
import { HealthComponent } from './component/health/health.component';
import { CarrerComponent } from './component/carrer/carrer.component';
import { ReportsComponent } from './component/reports/reports.component';
import { AppsComponent } from './component/apps/apps.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    HomeHeaderComponent,
    HomeDashbaordComponent,
    DashbaordComponent,
    LoginComponent,
    MessagesComponent,
    GeneralInfoComponent,
    HeaderNavigationComponent,
    GenericInfoComponent,
    FinanceComponent,
    HealthComponent,
    CarrerComponent,
    ReportsComponent,
    AppsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GeneralInfoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
