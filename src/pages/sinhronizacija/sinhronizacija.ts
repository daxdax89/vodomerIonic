import { Injectable, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
@IonicPage()
@Component({
  selector: 'page-sinhronizacija',
  templateUrl: 'sinhronizacija.html',
})
export class SinhronizacijaPage {

  // sinhronizacijaPage = SinhronizacijaPage;
  private data: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private http: Http) {
  }

  visitMB() {
    window.open("http://micro.co.rs", '_system');
  }

  getData() {
    console.log('gettingData complete')
  }

  sendData() {

  }

  sendPictures() {

  }

  wipeData() {

  }
}
