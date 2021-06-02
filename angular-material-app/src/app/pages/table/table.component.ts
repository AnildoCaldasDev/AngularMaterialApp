import { PercentPipe } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  weightPerc: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", weightPerc: 0.18 },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He", weightPerc: 0.1 },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li", weightPerc: 0.20 },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", weightPerc: 0.56 },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B", weightPerc: 0.23 },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C", weightPerc: 0.19 },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", weightPerc: 0.10 },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O", weightPerc: 0.15 },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F", weightPerc: 0.13 },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne", weightPerc: 0.20 },
];

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol", "weightPerc"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //You can use ViewChild if you need to query one element from the DOM and ViewChildren for multiple elements.
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void { }
}


// <p>
// <strong>{{ item.key }} </strong>
// {{ item.value.currentValue | currency: "BRL":"symbol":"1.2-2" }}
// | {{ item.value.change | percent: "1.2-2" }}
// </p>
