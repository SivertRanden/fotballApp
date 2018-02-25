import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TrainingDurationPage } from '../training-duration/training-duration';
import { WhatTeamPage } from './../what-team/what-team';
import { UtilityService } from '../../app/injectable/utility.service';

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

  constructor(
    public navCtrl: NavController,
    public util: UtilityService) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AktivitetPage');
  }

  onNextButtonClicked(answer){
    this.util.len((len) => {
      let name = "aktivitet_" + len;
      this.util.get(name,(val) => {
        val[name].aktivitet = answer;
        this.util.set(name,val);
        if(answer === this.activities[1].name){
          this.navCtrl.push(WhatTeamPage);
        } else {
          this.navCtrl.push(TrainingDurationPage);
        }
      });
    });
  }
}
