import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


import { MasterPage } from '../master/master';
import { DetailPage } from '../detail/detail';

/*
  Generated class for the MasterDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-master-detail',
  templateUrl: 'master-detail.html'
})
export class MasterDetailPage {
  
  rootMaster = MasterPage;
  rootDetail = DetailPage;
  applyClass: boolean;

  constructor(public platform: Platform, public navCtrl: NavController) {
     this.applyClass = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterDetailPage');
  }

  //Apply custom CSS on pane change to set the width
  changePane(){
    this.applyClass = !this.applyClass;
  }
}
