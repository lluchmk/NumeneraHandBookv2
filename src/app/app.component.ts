import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { CyphersPage } from '../pages/cyphers/cyphers';
import { ArtifactsPage } from '../pages/artifacts/artifacts';
import { OdditiesPage } from '../pages/oddities/oddities';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToCyphers() {
    this.nav.push(CyphersPage);
  }

  goToArtifacts() {
    this.nav.push(ArtifactsPage);
  }

  goToOddities() {
    this.nav.push(OdditiesPage);
  }
}
