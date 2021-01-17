import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country, CountryDetail } from 'src/app/services/models/user-location-manager.model';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';

@Component({
  selector: 'app-usercountrylocation',
  templateUrl: './usercountrylocation.component.html',
  styleUrls: ['./usercountrylocation.component.css']
})
export class UserCountryLocationComponent implements OnInit {

  public showCountryDetail: boolean = false;
  countryDetail: CountryDetail = {};

  private subscriptions: Subscription[] = [];

  constructor(private userLocationManagerService: UserLocationManagerService) { }

  ngOnInit(): void {

    this.subscriptions.push(this.userLocationManagerService.subscribe((data: Country) => {
      if (data) {
        this.loadCountryByCode(data.countryCode);
      }
    }));

    // this.subscriptions.push(this.userLocationManagerService.getCountryByCode().subscribe(
    //   (data: any) => {
    //     console.log('data', data);
    //     if (data) {
    //       this.countryDetail.countryCode = data.alpha3Code;
    //       this.countryDetail.countryName = data.name;
    //       this.countryDetail.countryRegion = data.region;
    //       this.countryDetail.postalCode = data.area;
    //       this.countryDetail.countryFlag = data.flag;
    //       this.countryDetail.countryCapital = data.capital;
    //       this.showCountryDetail = true;
    //     } else {
    //       this.showCountryDetail = false;
    //     }
    //   },
    //   (error: any) => {
    //     console.log('Erro ao buscar Países' + error);
    //   }));
  }

  loadCountryByCode(code: string) {
    this.userLocationManagerService.getCountryByCode(code).subscribe(
      (data: any) => {
        console.log('data', data);
        if (data) {
          this.countryDetail.countryCode = data.alpha3Code;
          this.countryDetail.countryName = data.name;
          this.countryDetail.countryRegion = data.region;
          this.countryDetail.postalCode = data.area;
          this.countryDetail.countryFlag = data.flag;
          this.countryDetail.countryCapital = data.capital;
          this.showCountryDetail = true;
        } else {
          this.showCountryDetail = false;
        }
      },
      (error: any) => {
        console.log('Erro ao buscar Países' + error);
      });
  }
}
