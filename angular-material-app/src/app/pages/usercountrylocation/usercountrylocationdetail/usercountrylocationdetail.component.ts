import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CountryDetail } from 'src/app/services/models/user-location-manager.model';

@Component({
  selector: 'app-usercountrylocationdetail',
  templateUrl: './usercountrylocationdetail.component.html',
  styleUrls: ['./usercountrylocationdetail.component.css']
})
export class UsercountrylocationdetailComponent implements OnInit {

  @Input() countryDetailInput: CountryDetail;

  constructor() { }

  ngOnInit(): void {

  }

}
