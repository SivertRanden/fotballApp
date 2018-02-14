import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AktivitetPage } from './../aktivitet/aktivitet';
import { BegrunnelsePage } from './../begrunnelse/begrunnelse';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireStartPage');
  }

  onNextButtonClicked(value){
    if(value === "ja"){
      this.navCtrl.push(AktivitetPage);
    }else{
      this.navCtrl.push(BegrunnelsePage);
    }
  }

}
