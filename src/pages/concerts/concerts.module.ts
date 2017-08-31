import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcertsPage } from './concerts';

@NgModule({
  declarations: [
    ConcertsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcertsPage),
  ],
})
export class ConcertsPageModule {}
