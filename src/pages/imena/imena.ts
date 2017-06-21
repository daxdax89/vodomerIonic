import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imena',
  templateUrl: 'imena.html',
})
export class ImenaPage {

  titleBre: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titleBre = this.navParams.get('passedData');
    console.log('tvrd');
    console.log(this.titleBre);
  }

  ionViewDidLoad() {

  }

  showUserInfo(){

  }
}
