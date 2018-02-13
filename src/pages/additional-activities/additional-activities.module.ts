import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionalActivitiesPage } from './additional-activities';

@NgModule({
  declarations: [
    AdditionalActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionalActivitiesPage),
  ],
})
export class AdditionalActivitiesPageModule {}
