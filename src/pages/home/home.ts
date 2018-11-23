import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  signup(){
  	if(this.uname.value == "admin", this.password.value == "password"){
  		const alert = this.alertCtrl.create({
		      title: 'Login Success',
		      subTitle: 'You have successfully logged in',
		      buttons: ['OK']
		    });
		    alert.present();
		    this.navCtrl.push(DashboardPage);
  	}
  	else{
  		const alert = this.alertCtrl.create({
		      title: 'Login Failed',
		      subTitle: 'Wrong username / password combination',
		      buttons: ['OK']
		    });
		    alert.present();
  	}

  }
  login(){
    this.navCtrl.push(DashboardPage);
  }
  news(){
    this.navCtrl.push(NewsPage);
  }
}
