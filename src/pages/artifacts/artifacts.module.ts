import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtifactsPage } from './artifacts';

@NgModule({
  declarations: [
    ArtifactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtifactsPage),
  ],
})
export class ArtifactsPageModule {}
