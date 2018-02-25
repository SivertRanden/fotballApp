import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntensityPage } from '../intensity/intensity';
import { UtilityService } from '../../app/injectable/utility.service';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public util: UtilityService) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MatchDurationPage');
  }

  onNextButtonClicked(answer){
    this.util.len((len) => {
      let name = "aktivitet_" + len;
      this.util.get(name,(val) => {
        val[name].varighet = answer ? answer : 0;
        this.util.set(name,val);
        //console.log(val);
        this.navCtrl.push(IntensityPage);
      });
    });
  }
}
