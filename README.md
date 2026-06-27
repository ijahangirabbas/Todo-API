# Todo API

A simple REST API for managing todos using Node.js, Express, MongoDB, and Mongoose.

## Features

- Create a new todo
- Get all todos
- Get a single todo by ID
- Update a todo
- Delete a todo
- Store todo data in MongoDB Atlas

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman for API testing

## Project Structure

```text
Todo-API/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   └── todo.controller.js
├── middlewares/
│   └── error.middleware.js
├── models/
│   └── todo.model.js
├── routes/
│   └── todo.routes.js
├── services/
│   └── todo.service.js
├── utils/
│   └── appError.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/todo-api.git
```

Go into the project folder:

```bash
cd todo-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root folder.

Add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/todo-api?retryWrites=true&w=majority
PORT=5000
```

Do not upload your real `.env` file to GitHub.

## Run the Server

```bash
node app.js
```

The server will run on:

```text
http://localhost:5000
```

## API Endpoints

### Get All Todos

```http
GET /todos
```

Full URL:

```text
http://localhost:5000/todos
```

### Get Todo By ID

```http
GET /todos/:id
```

Example:

```text
http://localhost:5000/todos/6a3f6196b531e144cbe
```

### Create Todo

```http
POST /todos
```

Full URL:

```text
http://localhost:5000/todos
```

Request body:

```json
{
  "title": "Build an Express API"
}
```

### Update Todo

```http
PUT /todos/:id
```

Example:

```text
http://localhost:5000/todos/6a3f61efa531e144cbe
```

Request body:

```json
{
  "title": "Build an Express API",
  "completed": true
}
```

You can also update only one field:

```json
{
  "completed": true
}
```

### Delete Todo

```http
DELETE /todos/:id
```

Example:

```text
http://localhost:5000/todos/6a3f619fa531e144cbe
```

## Todo Data Example

A todo stored in MongoDB looks like this:

```json
{
  "_id": "6a3f6196b41ee144cbe",
  "title": "Build an Express API",
  "completed": false,
  "createdAt": "2026-06-27T05:37:26.898Z",
  "updatedAt": "2026-06-27T05:37:26.898Z",
  "__v": 0
}
```

Use the `_id` value when getting, updating, or deleting a todo.

## Testing With Postman

For `GET` requests:

1. Select `GET`.
2. Enter the request URL.
3. Click **Send**.

For `POST` and `PUT` requests:

1. Select `POST` or `PUT`.
2. Enter the request URL.
3. Open the **Body** tab.
4. Select **raw**.
5. Choose **JSON**.
6. Add the JSON body.
7. Click **Send**.

Example `POST` body:

```json
{
  "title": "Learn MongoDB"
}
```

Example `PUT` body:

```json
{
  "completed": true
}
```

## MongoDB Atlas

To view saved todos in MongoDB Atlas:

1. Open MongoDB Atlas.
2. Open your project.
3. Open your cluster.
4. Click **Browse Collections**.
5. Open your database.
6. Open the `todos` collection.

If your connection string does not include a database name, MongoDB may store the data in the default `test` database.

The collection name should be:

```text
todos
```

## Common Issues

### MongoDB Not Connected

Check these things:

- The `.env` file exists in the root folder.
- `MONGODB_URI` is spelled correctly.
- The MongoDB Atlas username is correct.
- The MongoDB Atlas password is correct.
- Your current IP address is allowed in MongoDB Atlas Network Access.
- Your MongoDB Atlas cluster is running.

### Delete Error

If you get this error:

```text
TypeError: todo.remove is not a function
```

Use this instead:

```js
return await Todo.findByIdAndDelete(id);
```

### PUT Request Not Updating

Make sure your controller calls the update service:

```js
const todo = await todoService.updateTodo(id, title, completed);
```

Then return the updated todo:

```js
res.status(200).json(todo);
```

## License

This project is for learning purposes.
