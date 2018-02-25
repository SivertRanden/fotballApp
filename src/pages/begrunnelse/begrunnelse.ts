import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { UtilityService } from '../../app/injectable/utility.service';

/**
 * Generated class for the BegrunnelsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-begrunnelse',
  templateUrl: 'begrunnelse.html',
})

export class BegrunnelsePage {
  communicating = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public util: UtilityService) {
      this.communicating = true;
    }
    
  loading = this.loadingCtrl.create({
    content: 'Snakker med tjeneren. Vennligst vent...'
  });

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BegrunnelsePage');
  }

  onNextButtonClicked(answer){
    this.showLoading();
    this.util.get('inaktiv',(val) => {
      val.inaktiv.årsak = answer;
      this.util.set('inaktiv',val);

      if (this.util.browser) {

      } else { // if end
        this.util.post('http://51.175.7.124:8080/',val,(res) => {
          this.hideLoading();  
          if (res.status == 200) {
          }
        },(err) => {
          this.hideLoading(); 
        }); // post end
      } // else end
    }); // get end
  } // onNextButton end

  showLoading() {
    this.loading.onDidDismiss(() => {
      this.navCtrl.popToRoot();
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
        this.navCtrl.popToRoot();
      });  
    }
    if(this.communicating) {
      setTimeout(this.hideLoading.bind(this),100);
    } else {
      doHide();
    }
  }
} // class end
