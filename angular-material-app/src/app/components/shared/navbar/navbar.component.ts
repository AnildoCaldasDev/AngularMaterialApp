import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/services/models/user-location-manager.model';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public countryLabel: string;
  public stateLabel: string;
  public cityLabel: string;

  private subscriptions: Subscription[] = [];

  constructor(private userLocationManager: UserLocationManagerService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.userLocationManager
      .subscribe((country: Country) => {
        if (country) {
          this.countryLabel = country.label;
          this.stateLabel = country.stateSelected?.label;
          this.cityLabel = country.citySelected?.label;
        }
      }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
    }
  }
}
