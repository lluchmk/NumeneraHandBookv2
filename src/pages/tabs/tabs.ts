import { Component } from '@angular/core';

import { CyphersPage } from '../cyphers/cyphers';
import { ArtifactsPage } from '../artifacts/artifacts';
import { OdditiesPage } from '../oddities/oddities';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CyphersPage;
  tab2Root = ArtifactsPage;
  tab3Root = OdditiesPage;

  constructor() {

  }
}
