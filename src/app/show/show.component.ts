import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountriesService } from 'src/services/countries/countries.service';
import { CountryTable } from 'src/services/models/country';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  displayedColumnsNames: string[] = ['Code', 'Name', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Edit', 'Delete'];
  displayedColumns: string[] = ['code', 'name', 'continent', 'region', 'surfaceArea', 'indepYear', 'edit', 'delete'];
  dataSource: MatTableDataSource<CountryTable>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private countries: CountriesService) {
  }

  ngOnInit() {

    this.countries.getAllForTable().then(c => {
      
      console.table(c);

      if(c.length > 0) {

        const keys = Object.keys(c[0]);

        const keysWithFirstLetterUppercased = [];

        for(let k of keys) {

          keysWithFirstLetterUppercased.push(k[0].toUpperCase() + k.substring(1));
        }

        this.displayedColumnsNames = [...keysWithFirstLetterUppercased];

        this.displayedColumns = [...keys];
      }

      this.dataSource = new MatTableDataSource(c);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}