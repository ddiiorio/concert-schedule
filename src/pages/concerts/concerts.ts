import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-concerts',
  templateUrl: 'concerts.html',
})
export class ConcertsPage {
  events = [];
  newEventArtist;
  newEventDate;
  newEventVenue;
  // newEvent = {
  //   artist: this.newEventArtist.$value,
  //   date: this.newEventDate.$value,
  //   venue: this.newEventVenue.$value
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

    this.fdb.list("/myEvents/").subscribe(_data => {
      this.events = _data;
      console.log(this.events);
    });
 }

  btnAddClicked(newEventArtist, newEventDate, newEventVenue) {
    this.fdb.list("/myEvents/").push({
      artist: this.newEventArtist,
      date: this.newEventDate,
      venue: this.newEventVenue
    });
  }

  del(i) {
    this.fdb.list("/myEvents/").remove(this.events[i].$key);
  }

  remove(no){
    (this.events).splice(no, 1);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcertsPage');
  }

}

//this.newEvent
