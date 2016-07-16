import {Component} from '@angular/core';
import {Todo} from '../../mocks/Todo.ts';
import {todoList} from '../../mocks/todo-list';

@Component({
  selector: 'list',
  templateUrl: 'list.template.html'
})

export class ListComponent{
  list: Todo[] = todoList;
}
