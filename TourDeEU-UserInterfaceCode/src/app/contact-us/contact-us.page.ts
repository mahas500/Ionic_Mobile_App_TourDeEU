import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(private alertCtrl: AlertController,private vibration:Vibration) { }

  ngOnInit() {
    this.contactus();
  }
  async contactus(){
    let alert =  await this.alertCtrl.create({
      header: "Want to contact us ?",
     
      buttons: [
        {
          text: "OKAY"
        }
      ]
    });
    alert.present();
    }

    submitConfirmation(){
      this.vibration.vibrate(2000);
    }

}
