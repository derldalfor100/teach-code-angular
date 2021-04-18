import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateUpdateCountry } from 'src/services/models/create-update-country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  model: CreateUpdateCountry = new CreateUpdateCountry();

  defaultModel: CreateUpdateCountry = null;

  submitted = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const { queryParams } = this.route.snapshot;

    if(queryParams && queryParams['code']) {

      this.defaultModel = queryParams as CreateUpdateCountry;

      this.model = {...this.defaultModel};
    }

    console.warn(this.route.snapshot.queryParams);
  }

  onSubmit() {

    this.submitted = true;

    console.log('submitted:', {...this.model})
  }

  onReset() {

    this.model = this.defaultModel === null ? new CreateUpdateCountry() : {...this.defaultModel};
  }
}
