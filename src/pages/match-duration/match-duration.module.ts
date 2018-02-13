import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchDurationPage } from './match-duration';

@NgModule({
  declarations: [
    MatchDurationPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchDurationPage),
  ],
})
export class MatchDurationPageModule {}
