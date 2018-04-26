import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectapartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-selectapartment',
  templateUrl: 'selectapartment.html',
})
export class SelectapartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectapartmentPage');
  }
  searchQuery: string = '';
  apartmentList: string[];
  filteredApartments: string[];
  selectedApartment='';

  initializeItems() {
    this.apartmentList = [
      'Snn Raj Serinity',
      'Snn Raj Eternia',
      'Samudhura Shikharam',
      'Snn Raj GreenBay',
      'Shobha Green Garden'
    ];
  }

  getApartment(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredApartments = this.apartmentList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.filteredApartments = [];
    }
  }

  selectApartment(apartment){

    this.filteredApartments = [];
    this.selectedApartment=apartment  ;
  }

}
