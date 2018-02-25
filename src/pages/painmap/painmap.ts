import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, Platform } from 'ionic-angular';

/**
 * Generated class for the PainmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-painmap',
  templateUrl: 'painmap.html',
})
export class PainmapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PainmapPage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: "Hvor vondt har du?",
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          text: "Litt støl",
          handler: () => {
            console.log("Litt støl");
          }
        },
        {
          text: "Støl, kan bevege meg greit",
          handler: () => {
            console.log("Støl, kan bevege meg greit");
          }
        },
        {
          text: "Begrenser bevegelse",
          handler: () => {
            console.log("Begrenser bevegelse");
          }
        },
        {
          text: "Vanskelig å bevege seg",
          handler: () => {
            console.log("Vanskelig å bevege seg");
          }
        },
        {
          text: "Smertefullt å bevege seg",
          handler: () => {
            console.log("Smertefullt å bevege seg");
          }
        },
        {
          text: 'Avbryt',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
