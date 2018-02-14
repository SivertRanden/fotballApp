import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntensityPage } from '../intensity/intensity';

/**
 * Generated class for the TrainingDurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-duration',
  templateUrl: 'training-duration.html',
})
export class TrainingDurationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingDurationPage');
  }

  onNextButtonClicked(){
    this.navCtrl.push(IntensityPage);
  }

}
