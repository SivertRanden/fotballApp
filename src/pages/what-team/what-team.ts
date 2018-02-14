import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchDurationPage } from '../match-duration/match-duration';

/**
 * Generated class for the WhatTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-what-team',
  templateUrl: 'what-team.html',
})
export class WhatTeamPage {

  teamTypes: {name: string}[] = [{"name": "Mitt lag"}, {"name": "Annet lag"}];

  teams: {name: string}[] = [{"name": "G15"}, {"name": "G16"},
                             {"name": "Junior"}, {"name": "Kardlag"}];

  typeSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatTeamPage');
    document.getElementById("teamList").style.display = "none";
  }

  onRadioChange(type){
    this.typeSelected = type;
    if(this.typeSelected === this.teamTypes[0].name){
      document.getElementById("teamList").style.display = "none";
    }else if(type === this.teamTypes[1].name){
      document.getElementById("teamList").style.display = "block";
    }
  }

  onNextButtonClicked(answer){
    this.navCtrl.push(MatchDurationPage);
  }

}
