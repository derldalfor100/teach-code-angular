import { Component, OnInit } from '@angular/core';
import { CreateUpdateCountry } from 'src/services/models/create-update-country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  model = new CreateUpdateCountry();

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.submitted = true;

    console.log('submitted:', {...this.model})
  }

  onReset() {

    this.model = new CreateUpdateCountry();
  }
}
