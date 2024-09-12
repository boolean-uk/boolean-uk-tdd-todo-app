# MY DOMAIN MODEL

1. Create a todo item that has an ID, text description, and starts off incomplete

   - _USER STORY_ =>
     - As a user
     - So that I can monitor my list of todos
     - I want to be able to `create` a todoItem that has an id, description and status
   - _DOMAIN MODEL_
     - Methods => create(todoItem)
     - Inputs => todoItem
     - Data => `todoItem`(@String), `Property`: description(@String)
     - Scenario => **1** If a todoItem is given by the user
     - Outputs => @Object of todo that was created

2. Get all todo items

   - _USER STORY_ =>
     - As a user
     - So that I can see the state of my todos
     - I want to be able to get a list of all my todos
   - _DOMAIN MODEL_
     - Methods => getAll()
     - Inputs =>
     - Data =>
     - Scenario => **1** If a there are todo items
     - Outputs => @Array_Of_Object of all todos

3. Set a todo completed by its ID

   - _USER STORY_ =>
     - As a user
     - So that I can set my todo as completed
     - I want to be able to set a todo as completed
   - _DOMAIN MODEL_
     - Methods => setComplete(id)
     - Inputs => id(@Number)
     - Data => `id`(@Number), `Properties`: id(@Number)
     - Scenario => **1** If id is supplied
     - Outputs => @Object of todo that matches the id with `status` set to `complete`

4. Get only todo items that are incomplete

   - _USER STORY_ =>
     - As a user
     - So that I can view the todos I have not completed
     - I want to be get all incomplete todos
   - _DOMAIN MODEL_
     - Methods => getIncomplete()
     - Inputs =>
     - Data =>
     - Scenario => **1** If there are `incomplete` todos
     - Outputs => @Array_Of_Object of all incompleted todos

5. Get only todo items that are complete

   - _USER STORY_ =>
     - As a user
     - So that I can view the todos I have completed
     - I want to be get all completed todos
   - _DOMAIN MODEL_
     - Methods => getCompleted()
     - Inputs =>
     - Data =>
     - Scenario => **1** If there are `complete` todos
     - Outputs => @Array_Of_Object of all completed todos

6. Search and return a todo item by its ID, or return a message saying it doesn’t exist

   - _USER STORY_ =>
     - As a user
     - So that I can view the details of the todo.
     - I want to be able to search for a todo by its id
   - _DOMAIN MODEL_
     - Methods => searchTodo(id)
     - Inputs => id(@Number)
     - Data => `id`(@Number), `Properties`: id(@Number)
     - Scenario => **1** If id is supplied
     - Outputs => @Object of todo that matches the id

7. Remove a todo item by its ID

   - _USER STORY_ =>
     - As a user
     - So that I can make my todo list current
     - I want to be able to delete a todo
   - _DOMAIN MODEL_
     - Methods => delete(id)
     - Inputs => id(@Number)
     - Data => `id`(@Number), `Properties`: id(@Number)
     - Scenario => **1** If id is supplied
     - Outputs => @Object of updated todoList
