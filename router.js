const Todo = require('./todoModel.js');

module.exports = (app) => {
    // get all todos
    app.get('/api/todos', (req, res) => {
        Todo.find({}, (err, todos)=> {
          if (err) {
             return res.status(400).send(err);
          } 
          res.status(200).send(todos);   
        })
    })

    // make a new todo

    app.post('/api/todo', (req, res) => {
        const text = req.body.text;
        Todo.create({text}, (err, todo) => {
            if (err) {
              return res.status(400).send(err);
            }
            res.status(200).send(todo);
        })
    }) 

    // delete a todo!

    app.delete('/api/todo/:_id', (req, res) => {
        const _id = req.params._id;
        Todo.deleteOne({_id}, (err) => {
            if (err) {
                return res.status(400).send(err);
              }
              res.status(200).send('todo deleted');
        })
    })

    // updated todo!

    app.put('/api/todo/:_id', (req, res) => {
        const _id = req.params._id;
        const text = req.body.text;
        Todo.updateOne({_id}, {text}, (err) => {
            if (err) {
                return res.status(400).send(err);
              }
              res.status(200).send('todo updated');    
        }) 

    })
}