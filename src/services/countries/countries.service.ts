import { Injectable } from '@angular/core';
import { Country, CountryTable } from '../models/country';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = "http://localhost:9004/api/";

  constructor(private connector: RestService) { }

  async getAll(): Promise<Country[]> {

    const val = await this.connector.getRequestAsync(this.url, null, null);

    if(!val || val.errorMessageFromRestApi) {

      return [];
    }

    const models = val as Country[];

    return models;
  }

  async getAllForTable(): Promise<CountryTable[]> {

    const models = await this.getAll();

    const tableModels: CountryTable[] = [];

    for(let m of models) {

      tableModels.push(new CountryTable(m));
    }

    return tableModels;
  }

  async insert(body: Country): Promise<boolean> {

    const val = await this.connector.postRequestAsync(this.url + 'insert', null, null, body as any);

    if(!val || val.errorMessageFromRestApi) {

      return false;
    }

    return true;
  }

  async update(code: string, body: Country): Promise<boolean> {

    const val = await this.connector.putRequestAsync(this.url + 'update/' + code, null, null, body as any);

    if(!val || val.errorMessageFromRestApi) {

      return false;
    }

    return true;
  }

  async delete(code: string): Promise<boolean> {

    const val = await this.connector.deleteRequestAsync(this.url + 'delete/' + code, null, null);

    if(!val || val.errorMessageFromRestApi) {

      return false;
    }

    return true;
  }
}
