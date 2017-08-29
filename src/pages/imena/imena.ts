import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imena',
  templateUrl: 'imena.html',
})
export class ImenaPage {
  street: any;
  searching: boolean = false;

  @ViewChild(Content) content: Content; // make ion-content accessible so we can recalculate it's height when adding/hiding searchbar


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.street = this.navParams.get('street');
  }

  ionViewDidLoad() {

  }

  showUserInfo() {

  }

  toggleSearchbar() {
    this.searching = !this.searching;
    this.content.resize();
  }
}
