//https://github.com/mgechev/angular2-seed
//# dev
//gulp serve.dev
//# prod
//gulp serve.prod
import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NamesList';

@Component({
  selector: 'component-2'
})
@View({
  templateUrl: './components/about/about.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class About {
  constructor(public list: NamesList) {
  }
  addName(newname) {
    this.list.add(newname.value);
    newname.value = '';
  }
}
