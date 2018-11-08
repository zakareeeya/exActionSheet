import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public AcSheet: ActionSheetController,
    public navCtrl: NavController) {

  }

  ShowAction(){
    const action = this.AcSheet.create({
      title: 'เลื่อกรายการ',
      subTitle:'-------------------------------',
      buttons:[
        {
          text: 'Add'
        },
        {
          text: 'Edit',
          role: 'edit',
          handler: () => {
            console.log('แก้ไขแล้ว');
        }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('ลบเรียบร้อยแล้ว');
        }
        }
     ]
    });
    action.present();
  }

}
