import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";

/**
 * Generated class for the UserRegister page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'user-register',
  templateUrl: './register.html',
})
export class UserRegister {
  private dataArray: any[];
  private users = {
    name: '',
    contact: '',
    email: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegister');
  }
  signup(){
    //Api connections
    this.navCtrl.push(WelcomePage);
  }

}
