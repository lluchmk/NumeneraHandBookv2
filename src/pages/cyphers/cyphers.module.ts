import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CyphersPage } from './cyphers';

@NgModule({
  declarations: [
    CyphersPage,
  ],
  imports: [
    IonicPageModule.forChild(CyphersPage),
  ]
})
export class CyphersPageModule {}
