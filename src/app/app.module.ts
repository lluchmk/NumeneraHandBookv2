import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { CyphersPage } from '../pages/cyphers/cyphers';
import { ArtifactsPage } from '../pages/artifacts/artifacts';
import { OdditiesPage } from '../pages/oddities/oddities';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
import { CypherProvider } from '../providers/cypher/cypher.service';

@NgModule({
  declarations: [
    MyApp,
    CyphersPage,
    ArtifactsPage,
    OdditiesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CyphersPage,
    ArtifactsPage,
    OdditiesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CypherProvider
  ]
})
export class AppModule {}
