import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TrainingDurationPage } from '../training-duration/training-duration';

/**
 * Generated class for the AktivitetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aktivitet',
  templateUrl: 'aktivitet.html',
})
export class AktivitetPage {

  activities: {name: string}[] = [{"name": "Fotball (vanlig trening)"}, {"name": "Fotballkamp"},
                                  {"name": "Fotball (egentrening)"}, {"name": "Basis/Styrketrening"},
                                  {"name": "Egentrening (med ball)"}, {"name": "Løpetrening (uten ball)"},
                                  {"name": "Annen idrett"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AktivitetPage');
  }

  onNextButtonClicked(answer){
    console.log(answer);
    console.log(answer === "Fotballkamp");
    if(answer === "Fotballkamp"){
      this.navCtrl.push(HomePage);
    }else{
      this.navCtrl.push(TrainingDurationPage);
    }
  }

}
