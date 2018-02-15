import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BegrunnelsePage');
  }

  onNextButtonClicked(answer){
    window['get']('inaktiv',(val) => {
      val.inaktiv.årsak = answer;
      window['set']('inaktiv',val);

      // TODO: post data

      this.navCtrl.popToRoot();
    });
  }
}
