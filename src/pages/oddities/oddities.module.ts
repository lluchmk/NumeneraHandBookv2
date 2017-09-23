import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OdditiesPage } from './oddities';

@NgModule({
  declarations: [
    OdditiesPage,
  ],
  imports: [
    IonicPageModule.forChild(OdditiesPage),
  ],
})
export class OdditiesPageModule {}
