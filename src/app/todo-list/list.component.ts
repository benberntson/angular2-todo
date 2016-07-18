import {Component,OnInit,OnDestroy} from '@angular/core';
import {TodoServer} from '../../schemas/Todo-server.ts';
import {todoList} from '../../mocks/todo-list';
import {TodoService} from './todo.service';

@Component({
  selector: 'list',
  templateUrl: 'list.template.html',
  providers: [TodoService],
  precompile: [ListComponent]
})

export class ListComponent implements OnInit, OnDestroy{
  list = todoList;
  intervalRef: NodeJS.Timer;

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.getTodoList();
    //this.intervalRef = setInterval(_ => {this.getTodoList();},2000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalRef);
  }

  getTodoList(){
    this.todoService
      .getTodoList()
      .then(todos => {
        console.log(todos)

        this.list = todos
          .filter(this.hasDescriptionAndTask)
          .map(this.uiComponents)
      })
  }

  deleteTodo(todo: TodoServer){
    this.todoService.delete(todo)
      .then(_ => this.getTodoList());
  }


  deleteTodoById(id: number){
    this.todoService.deleteById(id)
      .then(_ => this.getTodoList());
  }

  private hasDescriptionAndTask(todo){
    return !!(todo.description && todo.task);
  }

  private uiComponents(todo){
    return {
      _id: todo._id,
      task: todo.task,
      description: todo.description,
      started: todo.started,
      finished: todo.finished,
      complete: todo.complete
    };
  }
}
