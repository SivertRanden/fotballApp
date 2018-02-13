import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AktivitetPage } from './aktivitet';

@NgModule({
  declarations: [
    AktivitetPage,
  ],
  imports: [
    IonicPageModule.forChild(AktivitetPage),
  ],
})
export class AktivitetPageModule {}
