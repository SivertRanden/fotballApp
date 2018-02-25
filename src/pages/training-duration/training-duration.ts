import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IntensityPage } from '../intensity/intensity';
import { UtilityService } from '../../app/injectable/utility.service';

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

  constructor(
    public navCtrl: NavController,
    public util: UtilityService) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TrainingDurationPage');
  }

  onNextButtonClicked(answer){
    this.util.len((len) => {
      let name = "aktivitet_" + len;
      this.util.get(name,(val) => {
        val[name].varighet = answer ? answer : 0;
        this.util.set(name,val);
        this.navCtrl.push(IntensityPage);
      });
    });
  }

}
