import {TodoServer} from '../schemas/Todo-server.ts';

let mowTheLawn: TodoServer = {
  _id: 0,
  task: 'Mow the lawn',
  description: 'Get on your lawnmower and mow the lawn',
  started: Date.now(),
  finished: Date.now() + 10000
}

let waterTheFlowers: TodoServer = {
  _id: 10,
  task: 'Water the lawn',
  description: 'Turn on the sprinklers',
  started: Date.now() - 1000000,
  finished: Date.now()
};

let cookDinner: TodoServer = {
  _id: 15,
  task: 'Cook dinner',
  description: 'Make mac and cheese, and hotdogs',
  started: Date.now() - 30000,
  finished: Date.now() + 1000
};

let todoList: TodoServer[] = [
  mowTheLawn,
  waterTheFlowers,
  cookDinner
];

export {todoList}
