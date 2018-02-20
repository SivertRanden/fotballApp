import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnaireStartPage } from './../questionnaire-start/questionnaire-start';
import { Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

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
    public http: HTTP,
    public push: Push) {
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

      /* push */
      this.setupPush();
  }

  loadQuestionnaire() {
    this.navCtrl.push(QuestionnaireStartPage);
  }

  setupPush() {
    this.push.createChannel({
      id: "testchannel1",
      description: "My first test channel",
      importance: 3
    }).then(() => console.log('Channel created'));

    const options: PushOptions = {
      android : {
        senderID: "1096937960562"
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    pushObject.on('registration').subscribe((registration: any) => {
      this.http.post('http://51.175.7.124:8080/register',registration,{}).then();
      console.log('Device registered', registration);
    });
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  
  loadPainMap() {
    this.navCtrl.push(PainmapPage);
  }

}
