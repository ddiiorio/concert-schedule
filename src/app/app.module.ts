import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ConcertsPage } from '../pages/concerts/concerts';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

let config = {
  apiKey: "AIzaSyBDVeiP0baue1RbuNNxunfGjSu7RLLam4Q",
  authDomain: "concertapp-6ef13.firebaseapp.com",
  databaseURL: "https://concertapp-6ef13.firebaseio.com",
  projectId: "concertapp-6ef13",
  storageBucket: "concertapp-6ef13.appspot.com",
  messagingSenderId: "1010617522411"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ConcertsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ConcertsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
