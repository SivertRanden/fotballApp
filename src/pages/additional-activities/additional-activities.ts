import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AktivitetPage } from './../aktivitet/aktivitet';
import { HomePage } from './../home/home';

/**
 * Generated class for the AdditionalActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-activities',
  templateUrl: 'additional-activities.html',
})

export class AdditionalActivitiesPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AdditionalActivitiesPage');
  }

  onNextButtonClicked(answer){
    if(answer === "ja"){
      window['len']((len) => {
        let name = "aktivitet_" + (len+1);
        window['set'](name,{[name]:{}});
        this.navCtrl.setRoot(AktivitetPage, {}, {animate: true, direction: "forward"});
      });
    }else{
      window['len']((len) => {
        let obj = {};
        let n = 0;
        window['for']((val) => {
          let name = "aktivitet_" + (n+1);
          obj[name] = val[name];
          if (++n == len) {
            if((<any>window).browser) {

            } else { // if end
              window['post']('http://51.175.7.124:8080/',obj,(res) => {
                if (res.status == 200) {
                  this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
                }
              }); // post end
            } // else end
          } // if end
        }); // for end
      }); // len end
    } // else end
  } // onNextButton end
} // class end
