import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUSPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.openAlert();
  }

  async openAlert(){
    let alert =  await this.alertCtrl.create({
      header: "Want to know more about us ?",
     
      buttons: [
        {
          text: "OKAY"
        }
      ]
    });
    alert.present();
    }
}
