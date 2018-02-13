import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { BegrunnelsePage } from '../begrunnelse/begrunnelse';
import { AktivitetPage } from '../aktivitet/aktivitet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadQuestionnaire() {
    this.navCtrl.push(QuestionnaireStartPage);
  }

  loadBegrunnelse() {
    this.navCtrl.push(BegrunnelsePage);
  }

  loadAktivitet() {
    this.navCtrl.push(AktivitetPage);
  }

}
