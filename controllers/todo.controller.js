const todoService = require("../services/todo.service");
const appError = require("../utils/appError");

async function getTodos(req, res) {
  const todos = await todoService.getAllTodos();

  res.status(200).json(todos);
}

async function getTodoById(req, res, next) {
  try {
    const id = req.params.id;
    const todo = await todoService.getTodoById(id);

    if (!todo) {
      throw new appError("Todo not found", 404);
    }
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
}

// async function createTodo(req,res){
//     const { title } = req.body

//     if(!title) {
//         return res.status(400).json({
//             message: "Title is required"
//         })
//     }

//     const todo = todoService.createTodo(title)
//     res.status(201).json(todo)
// }
async function createTodo(req, res) {
  try {
    const { title } = req.body;
    const todo = await todoService.createTodo(req.body.title);

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Error creating todo",
    });
  }
}
async function updateTodo(req, res) {
  const id = req.params.id;
  const { title, completed } = req.body;
  if (!title && completed === undefined) {
    return res.status(400).json({
      message: "Title or completed status is required",
    });
  }

  const todo = await todoService.getTodoById(id);
  res.status(200).json({ message: "Todo updated successfully" });
}
async function deleteTodo(req, res) {
  const id = req.params.id;
  const todo = await todoService.getTodoById(id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  await todoService.deleteTodo(id);
  res.status(200).json({ message: "Todo deleted successfully" });
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
