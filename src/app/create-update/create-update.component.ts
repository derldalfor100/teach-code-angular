import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/services/countries/countries.service';
import { CreateUpdateCountry } from 'src/services/models/create-update-country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  readonly continentNames = ['Asia','Europe','North America','Africa','Oceania','Antarctica','South America'];

  model: CreateUpdateCountry = new CreateUpdateCountry();

  defaultModel: CreateUpdateCountry = null;

  submitted = false;

  constructor(private route: ActivatedRoute, private countries: CountriesService) { }

  ngOnInit(): void {

    const { queryParams } = this.route.snapshot;

    if(queryParams && queryParams['code']) {

      this.defaultModel = queryParams as CreateUpdateCountry;

      this.model = {...this.defaultModel};
    }

    console.warn(this.route.snapshot.queryParams);
  }

  onSubmit() {

    if(!this.defaultModel) {

      this.addNewCountry();
    } else {

      this.updateCountry();

      this.defaultModel = {...this.model};
    }

    this.submitted = true;

    console.log('submitted:', {...this.model})
  }

  onReset() {

    this.model = this.defaultModel === null ? new CreateUpdateCountry() : {...this.defaultModel};
  }

  async addNewCountry() {

    const isSucceded = await this.countries.insert(this.model);

    isSucceded && console.log('inserted!');
  }

  async updateCountry() {

    const isSucceded = await this.countries.update(this.model.code, this.model);

    isSucceded && console.log('updated!');
  }
}
