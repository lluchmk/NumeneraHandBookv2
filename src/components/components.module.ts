import { NgModule } from '@angular/core';
import { CypherComponent } from './cypher/cypher.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CypherComponent],
	imports: [IonicModule.forRoot(CypherComponent)],
	exports: [CypherComponent]
})
export class ComponentsModule {}
