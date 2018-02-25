import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AktivitetPage } from './../aktivitet/aktivitet';
import { HomePage } from './../home/home';

import { LoadingController } from 'ionic-angular';
import { UtilityService } from '../../app/injectable/utility.service';

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
  communicating = true;
  
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public util: UtilityService) {
      this.communicating = true;
    }

  loading = this.loadingCtrl.create({
    content: 'Snakker med tjeneren. Vennligst vent...'
  });
  
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AdditionalActivitiesPage');
  }

  onNextButtonClicked(answer){
    if(answer === "ja"){
      this.util.len((len) => {
        let name = "aktivitet_" + (len+1);
        this.util.set(name,{[name]:{}});
        this.navCtrl.setRoot(AktivitetPage, {}, {animate: true, direction: "forward"});
      });
    }else{
      this.showLoading();
      this.util.len((len) => {
        let obj = {};
        let n = 0;
        this.util.for((val) => {
          let name = "aktivitet_" + (n+1);
          obj[name] = val[name];
          if (++n == len) {
            if(this.util.browser) {
            } else { // if end
              this.util.post('http://51.175.7.124:8080/',obj,(res) => {
                this.hideLoading();
                if (res.status == 200) {
                }
              },(err) => {
                this.hideLoading(); 
              }); // post end
            } // else end
          } // if end
        }); // for end
      }); // len end
    } // else end
  } // onNextButton() end

  showLoading() {
    this.loading.onDidDismiss(() => {
      this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "backward"});
    });
    this.loading.present();
    setTimeout(() => {
      this.communicating = false;
    },1000)
  }

  hideLoading() {
    let doHide = () => {
      this.loading.dismiss();
      this.loading = this.loadingCtrl.create({
        content: 'Snakker med tjeneren. Vennligst vent...'
      });
      this.loading.onDidDismiss(() => {
        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "backward"});
      });  
    }
    if(this.communicating) {
      setTimeout(this.hideLoading.bind(this),100);
    } else {
      doHide();
    }
  }
} // class end
