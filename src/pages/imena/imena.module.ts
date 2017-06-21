import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImenaPage } from './imena';

@NgModule({
  declarations: [
    ImenaPage,
  ],
  imports: [
    IonicPageModule.forChild(ImenaPage),
  ],
  exports: [
    ImenaPage
  ]
})
export class ImenaPageModule {}
