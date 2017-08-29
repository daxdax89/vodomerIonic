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
  loading: any;
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
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.streets = result;
        console.log("Success : ", this.streets);

      },
      err => {
        console.error("Error : ", err);
      },
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );
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
