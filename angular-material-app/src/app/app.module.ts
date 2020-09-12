import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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

import { FramePageComponent } from "./pages/master/frame.page.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { TableComponent } from "./pages/table/table.component";
import { IconsComponent } from "./pages/icons/icons.component";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FramePageComponent,
    NavbarComponent,
    FormsComponent,
    TableComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
