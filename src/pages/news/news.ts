import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
	url: string;
	data: string;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
  }

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    this.loadUser();
  }

  loadUser(){
  	this.http.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5cbb4177d8a0480bb1ff7228cbd51561')
  	.map(res => res.json())
  	.subscribe(data =>{
  		this.data = data.articles;
  		console.log(data.articles);
  	},err => {
  		console.log(err);
  	});
  }

}
