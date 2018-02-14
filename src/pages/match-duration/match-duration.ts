import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntensityPage } from '../intensity/intensity';

/**
 * Generated class for the MatchDurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-duration',
  templateUrl: 'match-duration.html',
})
export class MatchDurationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDurationPage');
  }

  onNextButtonClicked(){
    this.navCtrl.push(IntensityPage);
  }

}
