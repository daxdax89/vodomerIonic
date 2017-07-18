import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  visitMB() {
    window.open("http://micro.co.rs", '_system');
  }

  navigateToStart(): void {
    this.navCtrl.push('StartPage');
  }
}
