import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imena',
  templateUrl: 'imena.html',
})
export class ImenaPage {

  street: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.street = this.navParams.get('street');
  }

  ionViewDidLoad() {

  }

  showUserInfo(){

  }
}
