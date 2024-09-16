// Add your domain model below
CLASS todoItem(id: @integer, text: @string)
PROPERTIES

- id: @integer
- text: @string
- status: @string

CLASS todoList
PROPERTIES

- todos: [@todoItem]

METHODS

- getAllTodos(void)

  - OUTPUT: todos

- getCompletedTodos(void)

  - OUTPUT: [todos.status==='complete']


- getTodoById(id)

  - OUTPUT: todo.id===id

- updateTodoStatus(todoItem.id)

  - OUTPUT: true if successful false if not

- removeTodoById(id)
  - OUTPUT: true if successful false if not