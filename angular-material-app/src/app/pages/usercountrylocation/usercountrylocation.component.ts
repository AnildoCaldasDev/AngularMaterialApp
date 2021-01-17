import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country, CountryDetail } from 'src/app/services/models/user-location-manager.model';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';

@Component({
  selector: 'app-usercountrylocation',
  templateUrl: './usercountrylocation.component.html',
  styleUrls: ['./usercountrylocation.component.css']
})
export class UserCountryLocationComponent implements OnInit, OnDestroy {

  public showCountryDetail: boolean = false;
  public countryDetail?: CountryDetail;

  private subscriptions: Subscription[] = [];

  constructor(private userLocationManagerService: UserLocationManagerService) { }

  ngOnInit(): void {

    this.subscriptions.push(this.userLocationManagerService.subscribe((data: Country) => {
      if (data) {
        //this.loadCountryByCode(data.countryCode);
        this.countryDetail = data?.countryDetail;
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
      console.log("SubjectTesteDOISComponent desinscrito");
    }
  }
}
