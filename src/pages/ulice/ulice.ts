import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-ulice',
  templateUrl: 'ulice.html',
})

export class UlicePage {
  streets: any[];
  filtered_streets: any[];
  loading: any;
  fetchingData: boolean = false; // used to indicate if we're still loading up data
  searching: boolean = false;
  @ViewChild(Content) content: Content; // make ion-content accessible so we can recalculate it's height when adding/hiding searchbar


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpProvider: HttpProvider,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({
      content: 'Loading data...'
    });
    this.getdata();
  }

  getdata() {
    this.loading.present();
    this.fetchingData = true;
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.streets = result;
        this.filtered_streets = result;
        console.log("Success : ", this.streets);

      },
      err => {
        console.error("Error : ", err);
        this.fetchingData = false;
      },
      () => {
        this.loading.dismiss();
        console.log('getData completed');
        this.fetchingData = false;
      }
    );
  }

  /*
    Reset search back to original results
  */
  resetSearch() {
    this.filtered_streets = this.streets;
  }

  /*
    takes search input, filteres the list based on that input. Now only searches through street names.
  */
  getStreets(ev: any) {
    // Reset items back to all of the items
    this.resetSearch();

    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filtered_streets = this.filtered_streets.filter((street) => {
        let search_this = JSON.stringify(street.name).toLowerCase(); // only search specific key/values, else it will get slow with many results
        if (search_this.indexOf(val.toLowerCase()) > -1) return street;
      })
    }
  }

  toggleSearchbar() {
    this.searching =! this.searching;
    this.content.resize();
  }


  substring(str, num) {
    var result = " ";
    for (var i = 0; i < num; i++) {
      result = result + str[i];
    }
    return result;
  }

  filter() {
    var maxLength = (4);
    var str = "your string here";
    str = str.substring(0, str.indexOf(" ", maxLength));
    return str;
  }

  showHouseholds(street:any): void {
    this.navCtrl.push('ImenaPage', { street: street });
  }

}
