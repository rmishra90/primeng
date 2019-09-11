import {Component} from '@angular/core';
import {CountryService} from '../../service/countryservice';

@Component({
    templateUrl: './autocompletedemo.html'
})
export class AutoCompleteDemo {

    country: any;
    
    countries: any[];
        
    filteredCountriesSingle: any[];
    
    filteredCountriesMultiple: any[];
    
    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];
    
    filteredBrands: any[];
    
    brand: string;
    
    constructor(private countryService: CountryService) { }
    
    filterCountrySingle(event) {
        let query = event.query;        
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }
    
    filterCountryMultiple(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }
    
    filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        //let filtered : any[] = [];
       // for(let i = 0; i < countries.length; i++) {
       //     let country = countries[i];
//if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
   //             filtered.push(country);
     //       }
//}
//return filtered;
        
        // the below code snippet will work with the like search which i think can be implimented
         return countries ? countries.filter(item => item.name.search(new RegExp(query, 'i')) > -1) : [];
    }
        
    filterBrands(event) {
        this.filteredBrands = [];
        for(let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }
}
