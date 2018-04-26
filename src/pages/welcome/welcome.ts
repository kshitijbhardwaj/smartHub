import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserRegister} from "../register/register";
import {HomePage} from "../home/home";
import {OptverificationPage} from "../optverification/optverification";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    //Api connections
    this.navCtrl.push(HomePage);
  }

  signup(){
    this.navCtrl.push(OptverificationPage);
  }

}
