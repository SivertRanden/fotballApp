import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AktivitetPage } from './../aktivitet/aktivitet';
import { BegrunnelsePage } from './../begrunnelse/begrunnelse';

import { Storage } from '@ionic/storage';

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
    public navParams: NavParams,
    public storage: Storage) {}

  ionViewDidLoad() {
    this.storage.clear();
    //console.log('ionViewDidLoad QuestionnaireStartPage');
  }

  onNextButtonClicked(value){
    if(value === "ja"){
      window['set']('aktivitet_1',{aktivitet_1:{}});
      this.navCtrl.push(AktivitetPage);
    }else{
      window['set']('inaktiv',{inaktiv:{}});
      this.navCtrl.push(BegrunnelsePage);
    }
  }

}
