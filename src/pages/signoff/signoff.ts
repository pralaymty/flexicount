import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signoff2Page } from '../signoff2/signoff2';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../../providers/data-service/data-service';
 // import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



@IonicPage()
@Component({
  selector: 'page-signoff',
  templateUrl: 'signoff.html',
})
export class SignoffPage {

  data={};
  option:BarcodeScannerOptions;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private barcodeScanner: BarcodeScanner
    ) {
   
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoffPage');
  }
  
  
   scan2(){
     this.option={
       prompt: "Focus the QR code in the window below to sign off cleaning"
     }
     this.barcodeScanner.scan(this.option).then(barcodeData => {
       console.log(barcodeData);
       this.data = barcodeData;
       this.navCtrl.push(Signoff2Page, { data: barcodeData.text });
      })
     
      .catch(err => {
          console.log('Error', err);
      });
   } 

 // scan2(){
 //       this.qrScanner.prepare()
 //      .then((status: QRScannerStatus) => {
 //         if(status.authorized){
 //         // camera permission was granted
 //       // start scanning
 //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
 //        console.log('Scanned something', text);
 //        alert(text);
 //        this.qrScanner.hide(); // hide camera preview
 //        scanSub.unsubscribe(); // stop scanning
 //      });
 //      this.qrScanner.resumePreview();
 //          // show camera preview
 //      this.qrScanner.show();

 //    } else if (status.denied) {
 //     // camera permission was permanently denied
 //       // you must use QRScanner.openSettings() method to guide the user to the settings page
 //       // then they can grant the permission from there
 //      } else {
 //        // permission was denied, but not permanently. You can ask for permission again at a later time.
 //      }
 //   })
 //   .catch((e: any) => {
 //        alert('Error is' + e);
 //      });
 // }


  signoff2(){
    this.navCtrl.push(Signoff2Page);
  }

  scan() {

    // this.selectedProduct = {};
    // this.barcodeScanner.scan().then((barcodeData) => {
    //   this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
    //   if(this.selectedProduct !== undefined) {
    //     this.productFound = true;
    //   } else {
    //     this.productFound = false;
    //     this.toast.show(`Product not found`, '5000', 'center').subscribe(
    //       toast => {
    //         console.log(toast);
    //       }
    //     );
    //   }
    // }, (err) => {
    //   this.toast.show(err, '5000', 'center').subscribe(
    //     toast => {
    //       console.log(toast);
    //     }
    //   );
    // });
  }

  

  


}
