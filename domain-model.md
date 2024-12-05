# Add your domain model below

- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

| Methods                   | Inputs        | Data                                                          | Scenario            | Outputs
| create(todo)              | @object       | Properties: ID(@number), text(@string), completed(@boolean)   | successful          | true
|                           |               |                                                               | unsuccessful        | false
| getAllTodos()             | ()            |                                                               | list not empty      | todos(@object[])
|                           |               |                                                               | list empty          | false
| toggleStatus(id)          | @number       |                                                               | [todo.id === true]  | [todo.id === false]
|                           |               |                                                               | [todo.id === false] | [todo.id === true]
| getCompleted(completed)   | @boolean      |                                                               | some completed      | [todos.completed === true]
|                           |               |                                                               | no completed        | false
| getNotCompleted(completed)| @boolean      |                                                               | some incomplete     | [todos.completed === false]
|                           |               |                                                               | no incomplete       | false
| getTodoById(id)           | @number       |                                                               | id exists           | [todo.id === true]
|                           |               |                                                               | id does not exist   | false
| removeTodoById(id)        | @number       |                                                               | id exists           | true
|                           |               |                                                               | id does not exist   | false
