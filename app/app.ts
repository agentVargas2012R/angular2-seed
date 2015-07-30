import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {TodoApp} from './components/todoApp/todoApp';
import {TodoList} from './services/TodoList';
import {NamesList} from './services/NamesList';

@Component({
  selector: 'app',
  viewInjector: [TodoList, NamesList]
})
@RouteConfig([
  { path: '/', component: TodoApp, as: 'todoApp' },
  { path: '/Home', component: Home, as: 'home' },
  { path: '/About', component: About, as: 'about' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
