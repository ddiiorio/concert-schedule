import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  newEventArtist;
  newEventDate;
  newEventVenue;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController, private fdb: AngularFireDatabase ) {
  }

  btnAddClicked(newEventArtist, newEventDate, newEventVenue) {
    this.fdb.list("/myEvents/").push({
      artist: this.newEventArtist,
      date: this.newEventDate,
      venue: this.newEventVenue
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

}
