import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-get-data',
  templateUrl: 'get-data.html',
})
export class GetDataPage {

  regionName: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetDataPage');
  }

  visitMB() {
    window.open("http://micro.co.rs", '_system');
  }

  getDataFromServer() {
    console.log(this.regionName);

    if (this.regionName = 1) {

    } else {
      console.log('skipping');
    }
    if (this.regionName = 2) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
    if (this.regionName = 3) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
    if (this.regionName = 4) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
    if (this.regionName = 5) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
    if (this.regionName = 6) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
    if (this.regionName = 7) {
      console.log('skipping');
    } else {
      console.log('skipping');
    }
  }
}
