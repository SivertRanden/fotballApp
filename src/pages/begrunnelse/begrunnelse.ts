import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
    public navParams: NavParams,
    public http: HTTP) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BegrunnelsePage');
  }

  onNextButtonClicked(answer){
    window['get']('inaktiv',(val) => {
      val.inaktiv.årsak = answer;
      window['set']('inaktiv',val);

      if((<any>window).browser) {

      } else { // if end
        window['post']('http://192.168.1.224:8080',val,(res) => {
          if (res.status == 200) {
            this.navCtrl.popToRoot();
          }
        }); // post end
      } // else end
    }); // get end
  } // onNextButton end
} // class end
