import {Component,Input,Output,EventEmitter} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoCreation} from '../../schemas/Todo-creation';

@Component({
  selector: 'add-todo',
  templateUrl: 'add-todo.template.html',
  providers: [TodoService]
})

export class AddTodoComponent{
  task: string;
  started: number;
  description: string;
  finished: number;
  complete: boolean;

  constructor(private todoService: TodoService){}

  saveTodo(){
    let toBeSaved:TodoCreation = {
      task: this.task,
      description: this.description
    };
    console.log(`saving todo:` + JSON.stringify(toBeSaved));
    this.todoService.save(toBeSaved);
    this.addedTodo.emit({
        value: toBeSaved
    });
  }

  @Output() addedTodo = new EventEmitter();
}
