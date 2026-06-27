const Todo = require('../models/todo.model')

async function getAllTodos() {
    console.log("➡️ get /todos request received!");
    return await Todo.find();
}
async function getTodoById(id) {
    console.log("➡️ get /todos request received!");
    const todo = await Todo.findById(id);

    return todo;
}
async function createTodo(title){
    console.log("➡️ POST /todos request received!");
    
    const newTodo = new Todo({
        title: title
    });
    return await newTodo.save();
} 
async function updateTodo(id, title, completed) {
    console.log("➡️ PuT /todos request received!");
    const todo = await Todo.findById(id);   
    if(todo) {
        if(title) {
            todo.title = title
        }
        if(completed !== undefined) {
            todo.completed = completed
        }
        return await todo.save();
    }
    
}
// async function updateTodo(id, data) {
//   return await Todo.findByIdAndUpdate(id, data, {
//     new: true, return new title
//   });
// }

    async function deleteTodo(id) {
    console.log("Delete /todos request received!");
    return await Todo.findByIdAndDelete(id);
}



module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}
