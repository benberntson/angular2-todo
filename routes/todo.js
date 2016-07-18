const express = require('express'),
      router = express.Router(),
      Todo = require('../models/todo'),
      API_PATH = '/v1/todo'

router.get(API_PATH,function(req,res,next){
  Todo.find({},(err,todos) => {
    if(err) return console.log(err);

    res.json(todos);
  });

});

router.get(API_PATH+'/:id',function(req,res,next){
  Todo.find({_id : req.params.id},(err,todos) => {
    if(err) return console.log(err);

    res.json(todos);
  });
});

router.post(API_PATH,function(req,res,next){
  var todo = new Todo({
    id: req.body.id,
    task: req.body.task,
    description: req.body.description,
    started: new Date(),
    finished: '',
    complete: false
  })
  console.log(req.body)
  todo.save()
  res.status(202).json(todo)

})

router.delete(API_PATH+'/:id',function(req,res,next){
  if(req.params){
    Todo.find({_id: req.params.id}).remove((err,removed) => {
      if(err)return console.log(err)

      res.status(204).send();
    })
  }

})



module.exports = router;
