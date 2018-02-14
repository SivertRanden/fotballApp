import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private intensities: string[] = ["Hvile", "Veldig lett", "Lett", "Moderat", "Litt hardt", "Hardt", "Veldig hardt", "Veldig hardt", "Veldig hardt", "Veldig, veldig hardt", "Maksimalt"];

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntensityPage');
  }

  onSliderChange(event){
    let test = document.getElementById("intensity-label");
    test.textContent = this.intensities[event.value];
  }

}
