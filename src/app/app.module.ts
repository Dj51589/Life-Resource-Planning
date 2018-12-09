import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './component/home/home-routing.module';

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
import { VerticalTabComponent } from './component/vertical-tab/vertical-tab.component';
import { AddressComponent } from './component/address/address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

import { AngularFileUploaderModule } from 'angular-file-uploader';
import { MainLoaderComponent } from './component/main-loader/main-loader.component';

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
    NotFoundComponent,
    VerticalTabComponent,
    AddressComponent,
    MainLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFileUploaderModule,
    HttpClientModule,
    HomeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
