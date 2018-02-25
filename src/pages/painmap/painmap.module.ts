import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PainmapPage } from './painmap';

@NgModule({
  declarations: [
    PainmapPage,
  ],
  imports: [
    IonicPageModule.forChild(PainmapPage),
  ],
})
export class PainmapPageModule {}
