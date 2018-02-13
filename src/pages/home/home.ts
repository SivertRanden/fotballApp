import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { TrainingDurationPage } from '../training-duration/training-duration';
import { IntensityPage } from '../intensity/intensity';
import { MatchDurationPage } from './../match-duration/match-duration';
import { AdditionalActivitiesPage } from './../additional-activities/additional-activities';

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

  loadMatchDuration() {
    this.navCtrl.push(MatchDurationPage);
  }

  loadIntensity() {
    this.navCtrl.push(IntensityPage);
  }

  loadAdditionalActivities(){
    this.navCtrl.push(AdditionalActivitiesPage);
  }

}
