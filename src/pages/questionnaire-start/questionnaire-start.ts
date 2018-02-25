import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AktivitetPage } from './../aktivitet/aktivitet';
import { BegrunnelsePage } from './../begrunnelse/begrunnelse';

import { UtilityService } from '../../app/injectable/utility.service';

/**
 * Generated class for the QuestionnaireStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-start',
  templateUrl: 'questionnaire-start.html',
})

export class QuestionnaireStartPage {
  constructor(
    public navCtrl: NavController,
    public util: UtilityService) {}

  ionViewDidLoad() {
    this.util.clear();
  }

  onNextButtonClicked(value){
    if(value === "ja"){
      this.util.set('aktivitet_1',{aktivitet_1:{}});
      this.navCtrl.push(AktivitetPage);
    }else{
      this.util.set('inaktiv',{inaktiv:{}});
      this.navCtrl.push(BegrunnelsePage);
    }
  }

}
