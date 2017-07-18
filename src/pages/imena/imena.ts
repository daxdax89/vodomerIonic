import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imena',
  templateUrl: 'imena.html',
})
export class ImenaPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
  }

  ionViewDidLoad() {

  }

  showUserInfo(){

  }
}
