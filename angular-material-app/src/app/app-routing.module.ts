import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./pages/forms/forms.component";
import { HomeComponent } from "./pages/home/home.component";
import { FramePageComponent } from "./pages/master/frame.page.component";
import { ObservablesComponent } from "./pages/observables/observables.component";
import { SliderComponent } from "./pages/slider/slider.component";
import { TableComponent } from "./pages/table/table.component";
import { UserCountryLocationComponent } from "./pages/usercountrylocation/usercountrylocation.component";

const routes: Routes = [
  {
    path: "",
    component: FramePageComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "matslider", component: SliderComponent },
      { path: "tables", component: TableComponent },
      { path: "forms", component: FormsComponent },
      { path: "observables", component: ObservablesComponent },
      { path: "userlocation", component: UserCountryLocationComponent },


      // { path: 'cart', component: CartPageComponent, canActivate: [AuthService] },
      // { path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthService] }
    ],
  },
  // {
  //   path: "account",
  //   component: FramePageComponent,
  //   canActivate: [AuthService],
  //   children: [
  //     { path: "", component: ProfilePageComponent },
  //     { path: "pets", component: PetsPageComponent },
  //   ],
  // },
  // { path: "login", component: LoginPageComponent },
  // { path: "signup", component: SignupPageComponent },
  // { path: "reset-password", component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
