import {Component} from '@angular/core';
import {ListComponent} from './todo-list/list.component';



@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  styleUrls: ['app.style.css'],
  directives: [ListComponent]
})

export class AppComponent{

}
