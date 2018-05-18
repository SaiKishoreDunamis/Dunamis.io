import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  IonicServices } from '../../services/ionic-services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logData: any;
  data1: any;
  constructor(public navCtrl: NavController, private ionicService: IonicServices) {
    // this.showConfig();
  }
  // showConfig() {
  //   this.ionicService.getAllTodos()
  //     .then((data) => this.logData = {
      
  //     });
  // }

    ngOnInit(){
      this.ionicService
      .getWidgetData()
      .then(result => {
        console.log(result.widgetData.aroundMeCategroyArrayItems)
      })
      


      
    }

    
  

}
