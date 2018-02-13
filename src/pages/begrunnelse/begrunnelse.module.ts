import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BegrunnelsePage } from './begrunnelse';

@NgModule({
  declarations: [
    BegrunnelsePage,
  ],
  imports: [
    IonicPageModule.forChild(BegrunnelsePage),
  ],
})
export class BegrunnelsePageModule {}
