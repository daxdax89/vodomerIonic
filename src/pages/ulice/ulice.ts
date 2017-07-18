import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-ulice',
  templateUrl: 'ulice.html',
})

export class UlicePage {
  dbData: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Učitavanje podataka...'
    });
    this.getdata();
  }

  getdata() {
    this.loading.present();
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.dbData = result;
        console.log("Success : " + this.dbData);

      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        this.loading.dismiss();
        console.log('getData completed');
      }
    );
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

  showNames(item:any): void {
    this.navCtrl.push('ImenaPage', { title: item.ulica });
  }
}
