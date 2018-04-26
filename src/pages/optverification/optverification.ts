import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserRegister} from "../register/register";
import {SelectapartmentPage} from "../selectapartment/selectapartment";

/**
 * Generated class for the OptverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-optverification',
  templateUrl: 'optverification.html',
})
export class OptverificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptverificationPage');
  }
  verifyOtp(){
    this.navCtrl.push(UserRegister);
  }

}
