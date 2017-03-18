import { Component } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';

import { DetailPage } from '../detail/detail'


@Component({
  selector: 'page-master',
  templateUrl: 'master.html'
})
export class MasterPage {

  constructor(public appCtrl: App, public navCtrl: NavController, public platform: Platform) {
    
  }

  ionViewDidLoad() {
    //Set default detail page, need to add Timeout otherwise detail page thinks it is pushed?
    setTimeout(()=>{
      this.appCtrl.getActiveNav().setRoot(DetailPage, {
        id: 1,
        name: "Carl"
      });
    },0);
   

    console.log('ionViewDidLoad MasterPage');
  }
   

  itemClicked(id){

    /*getActiveNav gives back the nav of the detail page,
     always set new root when clicked, so you it also will be last 
     detail page viewed when you come from small to big screen*/

    this.appCtrl.getActiveNav().setRoot(DetailPage, {
      id: id,
      name: "Carl"
    });

    //If screen is small pushes the detail page on the stack
  	if(this.platform.width()<768){
  		this.appCtrl.getRootNav().push(DetailPage, {
        id: id,
        name: "Carl"
      });
    }
  }

}
