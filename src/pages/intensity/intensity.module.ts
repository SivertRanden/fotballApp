import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntensityPage } from './intensity';

@NgModule({
  declarations: [
    IntensityPage,
  ],
  imports: [
    IonicPageModule.forChild(IntensityPage),
  ],
})
export class IntensityPageModule {}
