import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';

import {AddTodoComponent} from './todo-list/add-todo.component';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  styleUrls: ['app.style.css'],
  directives: [AddTodoComponent,ROUTER_DIRECTIVES],
  //providers: [Router],
  precompile: [AppComponent]
})

export class AppComponent{
  constructor(private router:Router){}

  listChange(event){
    if(this.router.url === '/'){
    	this.router.navigate(['/list']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
