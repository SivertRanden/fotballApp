import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { PainmapPage } from './../painmap/painmap';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public storage: Storage,
    public http: HTTP) {
      /* globals */
      (<any>window).browser = this.platform.is('core') ? true : false;

      /* storage */
      (<any>window).get = (key: string, func: any) => this.storage.get(key).then(func);
      (<any>window).set = (key: string, value: Object) => this.storage.set(key,value);
      (<any>window).len = (func: any) => this.storage.length().then(func);
      (<any>window).for = (func: any) => this.storage.forEach(func);
      (<any>window).clear = () => { this.storage.clear(); };

      /* http */
      (<any>window).post = (url: string, object: Object, func: any) => {
        this.http.setDataSerializer('json');
        this.http.post(url,object,{}).then(func);
      }
  }

  loadQuestionnaire() {
    this.navCtrl.push(QuestionnaireStartPage);
  }

  loadPainMap() {
    this.navCtrl.push(PainmapPage);
  }

}
