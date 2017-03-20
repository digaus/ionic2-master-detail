import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  content: any;

  //Additional functionallity to allow manual fullscreen
  disableExpand: boolean;

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams) {
    this.content =  navParams.data;
  }

  ionViewDidEnter() {
    //Needed to add short delay otherwise canGoBack() fires always true
    setTimeout(()=>{
      this.disableExpand = this.navCtrl.canGoBack();
    },50);

    console.log('ionViewDidEnter DetailPage');
  }

  //When allowed user can expand which pushes site onto stack
  expand(){
    this.appCtrl.getRootNav().push(DetailPage, this.content)
  }

}
