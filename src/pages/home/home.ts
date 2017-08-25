import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private locationAccuracy: LocationAccuracy) {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request succesful'),
          error => console.log('Error requesting location permissions', error)
        );
      }
    });

  }

  visitMB() {
    window.open("http://micro.co.rs", '_system');
  }

  navigateToStart(): void {
    this.navCtrl.push('StartPage');
  }



}
