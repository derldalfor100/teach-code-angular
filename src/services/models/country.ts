import { ITableModel } from "../interfaces/tableModel.interface";

export class Country {

    code: string;
    name: string;
    continent: string;
    region: string;
    surfaceArea: number;
    indepYear?: number;
    population: number;
    lifeExpectancy?: number;
    gNP?: number;
    gNPOld?: number;
    localName: string;
    governmentForm: string;
    headOfState?: string;
    capital?: number;
    code2: string;

    constructor(country: Country) {

        for(let k of Object.keys(country)) {

            this[k] = country[k];
        }
    }
}

export class CountryTable extends Country implements ITableModel {

    edit: string;
    delete: string;

    constructor(country: Country, edit: string = "edit", deleteVar: string = "X") {
        
        super(country);
        
        this.edit = edit;

        this.delete = deleteVar;
    }
}