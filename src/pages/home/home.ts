import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { PainmapPage } from './../painmap/painmap';
import { UtilityService } from '../../app/injectable/utility.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  doSetup = true;

  constructor(
    public navCtrl: NavController,
    public util: UtilityService) {}

  loadQuestionnaire() {
    this.navCtrl.push(QuestionnaireStartPage);
  }
  
  loadPainMap() {
    this.navCtrl.push(PainmapPage);
  }
}
