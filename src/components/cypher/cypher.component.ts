import { Component, Input } from '@angular/core';

import { Cypher } from '../../models/cypher';

@Component({
  selector: 'cypher',
  templateUrl: 'cypher.html'
})
export class CypherComponent {

  @Input() cypher: Cypher;
  @Input() selected: boolean = false;
}
