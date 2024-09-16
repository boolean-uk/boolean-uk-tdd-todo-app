// Add your domain model below

- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

nouns: todo item, todo items.
verbs: Get ALL todo items, Set a todo Item to complete by ID, Get incomplete todo items, Get complete todo Items, search and return todo item by ID, remove a todo item by ID.
todo Item structure: ID, text description, status.

CLASS todoItem(id: @integer, text: @string)
PROPERTIES

- id: @integer
- text: @string
- status: @string

CLASS todoList
PROPERTIES

- todos: [@todoItem]

METHODS

- createNewTodo(text)

  - OUTPUT: true if successful false if not

- getAllTodos(void)

  - OUTPUT: todos

- getCompletedTodos(void)

  - OUTPUT: [todos.status==='complete']

- getIncompleteTodos(void)

  - OUTPUT: [todos.status==='incomplete']

- getTodoById(id)

  - OUTPUT: todo.id===id : false

- updateTodoStatus(todoItem.id)

  - OUTPUT: true if successful false if not

- removeTodoById(id)

  - OUTPUT: true if successful false if not
