import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


@Injectable()
export class UtilityService {

    constructor(
        public platform: Platform,
        public storage: Storage,
        public http: HTTP,
        public push: Push,
        public alertCtrl: AlertController) {
            this.setupPush();
    }

    browser = this.platform.is('core') ? true : false;

    /* storage */
    get = (key: string, func: any) => this.storage.get(key).then(func);
    set = (key: string, value: Object) => this.storage.set(key,value);
    len = (func: any) => this.storage.length().then(func);
    for = (func: any) => this.storage.forEach(func);
    clear = () => this.storage.clear();
    
    /* http */
    post = (url: string, object: Object, then: any, err: any) => {
        let processed = false;
        this.http.setDataSerializer('json');
        this.http.setRequestTimeout(10);
        this.http.post(url,object,{})
        .then((res) => {
            then(res);
            processed = true;
        })
        setTimeout(() => {
            if (!processed) {
                err();
                this.serverDownAlert();
            }
        },10000);
    }

    serverDownAlert() {
        let alert = this.alertCtrl.create({
          title: 'Ingen respons',
          subTitle: 'Din respons ble ikke mottatt av tjeneren. Vennligst prøv igjen senere.',
          buttons: ['Lukk']
        });
        alert.present();
    }

    setupPush() {
        this.push.createChannel({
              id: "push_channel",
              description: "channel for push reminders",
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
        });
        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
}
