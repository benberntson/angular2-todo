import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {TodoCreation} from '../../schemas/Todo-creation';
import {TodoServer} from '../../schemas/Todo-server';

@Injectable()
export class TodoService{
  constructor(private http: Http){}

  getTodoList(): Promise<TodoServer[]> {
    return this.http.get('/api/v1/todo')
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(err => alert(err));
  }

  private post(todo: TodoCreation){
    let header = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.post('/api/v1/todo',JSON.stringify(todo),{headers: header})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => alert(err));
  }

  save(todo:TodoCreation){
    return this.post(todo);
  }

  delete(todo: TodoServer){
    return this.deleteById(todo._id);
  }

  deleteById(id: number){
    return this.http.delete('/api/v1/todo/'+id)
      .toPromise()
      .then(res => res.json().data)
      .catch(err => console.log(err));
  }
}
