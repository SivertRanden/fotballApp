import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';

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

}
