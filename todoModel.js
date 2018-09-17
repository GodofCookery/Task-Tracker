// Define todo model.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
}); 

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;