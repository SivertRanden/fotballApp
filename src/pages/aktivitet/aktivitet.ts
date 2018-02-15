import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainingDurationPage } from '../training-duration/training-duration';
import { WhatTeamPage } from './../what-team/what-team';

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
  activities: {name: string}[] = [
    {"name": "Fotball (vanlig trening)"}, {"name": "Fotballkamp"},
    {"name": "Fotball (egentrening)"}, {"name": "Basis/Styrketrening"},
    {"name": "Egentrening (med ball)"}, {"name": "Løpetrening (uten ball)"},
    {"name": "Annen idrett"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AktivitetPage');
  }

  onNextButtonClicked(answer){
    window['len']((len) => {
      let name = "aktivitet_" + len;
      console.log(name);
      window['get'](name,(val) => {
        val[name].aktivitet = answer;
        window['set'](name,val);
        //console.log(val);

        if(answer === this.activities[1].name){
          this.navCtrl.push(WhatTeamPage);
        } else {
          this.navCtrl.push(TrainingDurationPage);
        }
      });
    });
  }
}
