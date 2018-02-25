import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MatchDurationPage } from '../match-duration/match-duration';
import { UtilityService } from '../../app/injectable/utility.service';

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
  teamTypes: {name: string}[] = [
    {"name": "Mitt lag"},
    {"name": "Annet lag"}];

  teams: {name: string}[] = [
    {"name": "G15"}, {"name": "G16"},
    {"name": "Junior"}, {"name": "Kardlag"}];

  typeSelected: string;

  constructor(
    public navCtrl: NavController,
    public util: UtilityService) {}

  ionViewDidLoad() {
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

  onNextButtonClicked(answer, type){
    this.util.len((len) => {
      let name = "aktivitet_" + len;
      this.util.get(name,(val) => {
        val[name].lag = type == "Mitt lag" ? "Mitt lag" : answer;
        this.util.set(name,val);
        this.navCtrl.push(MatchDurationPage);
      });
    });
  }
}
