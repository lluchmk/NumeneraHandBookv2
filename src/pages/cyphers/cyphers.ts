import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CypherProvider } from '../../providers/cypher/cypher.service';
import { Cypher } from '../../models/cypher';

@IonicPage()
@Component({
  selector: 'page-cyphers',
  templateUrl: 'cyphers.html',
})
export class CyphersPage {

  private _cyphers: Array<Cypher>;
  private loadError: boolean;
  private selectedCypher: Cypher = null;
  private showSearch: boolean = false;
  private searchKey = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private cypherProvider: CypherProvider) {
    this.cypherProvider.getChyphers().subscribe( (callback) => {
      if (callback.error == null) {
        this._cyphers = callback.result;
        this.loadError = false;
      } else {
        this.loadError = true;
      }
    });
  }

  private selected(c: Cypher) {
    if (c != this.selectedCypher)
      this.selectedCypher = c;
    else
      this.selectedCypher = null;
  }

  private filterCyphers() {
    if (this.searchKey != '') {
      return this._cyphers.filter(c => c.name.toLowerCase().includes(this.searchKey.toLowerCase()));
    } else {
      return this._cyphers;
    }
  }

  private toggleSearch() {
    this.showSearch = !this.showSearch;
    this.searchKey = '';
  }

}
