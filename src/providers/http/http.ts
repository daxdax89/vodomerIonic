import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getJsonData() {
    // return this.http.get('http://localhost:8888/infodata/Data.php').map(res => res.json());
    return this.http.get('assets/data/dataTest.json').map(
      res => {
        let result = res.json();
        let unique_streets = []; // only contains the unique streetnames temporarily
        let mapped_streets = []; // contains final result array

        for(let street of result) {
            let streetname = street.ulica;
            if(unique_streets.indexOf(streetname) === -1) {
              unique_streets.push(streetname);

              let new_str = { name: streetname, komunsifra: street.komunsifra, households: [ street ] };
              mapped_streets.push(new_str);
            }
            else {
              for(let str of mapped_streets) {
                if(str.name === streetname) {
                  str.households.push(street);
                }
              }
            }

        }
        console.log(mapped_streets);
        return mapped_streets;
      }
    );
  }
}
