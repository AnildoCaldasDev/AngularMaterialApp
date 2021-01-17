import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatCheckboxModule,
//   MatDatepickerModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRadioModule,
//   MatSelectModule,
//   MatSliderModule,
//   MatSlideToggleModule,
// } from "@angular/material";

import { MatSliderModule } from "@angular/material/slider";
import { SliderComponent } from "./pages/slider/slider.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { FramePageComponent } from "./pages/master/frame.page.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { TableComponent } from "./pages/table/table.component";
import { IconsComponent } from "./pages/icons/icons.component";
import { ObservablesComponent } from './pages/observables/observables.component';
import { SubjectTesteUmComponent } from './pages/observables/subject-teste-um/subject-teste-um.component';
import { SubjectTesteDoisComponent } from './pages/observables/subject-teste-dois/subject-teste-dois.component';
import { SubjectTesteTresComponent } from './pages/observables/subject-teste-tres/subject-teste-tres.component';
import { UserLocationManagerComponent } from './components/shared/user-location-manager/user-location-manager.component';
import { UserCountryLocationComponent } from './pages/usercountrylocation/usercountrylocation.component';
import { UsercountrylocationdetailComponent } from './pages/usercountrylocation/usercountrylocationdetail/usercountrylocationdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FramePageComponent,
    NavbarComponent,
    FormsComponent,
    TableComponent,
    IconsComponent,
    ObservablesComponent,
    SubjectTesteUmComponent,
    SubjectTesteDoisComponent,
    SubjectTesteTresComponent,
    UserLocationManagerComponent,
    UserCountryLocationComponent,
    UsercountrylocationdetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
