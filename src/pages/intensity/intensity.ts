import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdditionalActivitiesPage } from './../additional-activities/additional-activities';

/**
 * Generated class for the IntensityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intensity',
  templateUrl: 'intensity.html',
})
export class IntensityPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

  private intensities: string[] = ["Hvile", "Veldig lett", "Lett", "Moderat", "Litt hardt", "Hardt", "Veldig hardt", "Veldig hardt", "Veldig hardt", "Veldig, veldig hardt", "Maksimalt"];

  ionViewDidLoad() {
    //console.log('ionViewDidLoad IntensityPage');
  }

  onSliderChange(event){
    let intensityLabel = document.getElementById("intensity-label");
    intensityLabel.innerHTML = this.intensities[event.value];
  }

  onNextButtonClicked(answer){
    window['len']((len) => {
      let name = "aktivitet_" + len;
      window['get'](name,(val) => {
        val[name].intensitet = answer;
        window['set'](name,val);
        //console.log(val);
        this.navCtrl.push(AdditionalActivitiesPage);
      });
    });
  }
}
