import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { TrainingDurationPage } from '../training-duration/training-duration';
import { IntensityPage } from '../intensity/intensity';

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

  loadTrainingDuration() {
    this.navCtrl.push(TrainingDurationPage);
  }

  loadIntensity() {
    this.navCtrl.push(IntensityPage);
  }

}
