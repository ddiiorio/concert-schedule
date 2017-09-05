import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {AddEventPage} from "../add-event/add-event";

@IonicPage()
@Component({
  selector: 'page-concerts',
  templateUrl: 'concerts.html',
})
export class ConcertsPage {
  events = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase, public modalCtrl: ModalController ) {

    this.fdb.list("/myEvents/").subscribe(_data => {
      this.events = _data;
      console.log(this.events);
    });
 }

  del(i) {
    this.fdb.list("/myEvents/").remove(this.events[i].$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcertsPage');
  }

  openModal() {
    let myModal = this.modalCtrl.create(AddEventPage);
    myModal.present();
  }

}
