
# Plan

## REQUIREMENTS

Create a todo item that has an ID, text description, and starts off incomplete
Get all todo items
Set a todo completed by its ID
Get only todo items that are incomplete
Get only todo items that are complete
Search and return a todo item by its ID, or return a message saying it doesn’t exist
Remove a todo item by its ID

## DOMAIN MODEL

### user story

As a very organised being,
So that I can add todos to my list,
I need to be able to create a new todo item and specify its  name,  id,  text description, and a completion status

As a very organised being,
So that I can look at my todo list,
I need to be able to get all the todo items and see their name,  id,  text description, and a completion status

As a very organised being,
So that I can keep track of what tasks I have completed,
I need to be able to toggle the completion status on my todo list items

As a very organised being,
So that I can easily see how many tasks I've done,
I need to be able to see only the completed todo items.

As a very organised being,
So that I can easily see what needs to be done,
I need to be able to see only the incompleted todo items.

As a very organised being,
So that I can find a specific todo,
I need to be able to search through my todo list by ID, and either see the todo, or a message telling me it does not exist.

As a very organised being,
So that I can delete irrelevant or incorrect entries to my todo list,
I need to be able to remove a specific todo item by its id.

### methods

1. createToDo()
2. getToDos()
3. setCompletionStatusToTrue()
4. getIncompleteToDos()
5. getCompletedTodos()
6. findToDoByID(id)
7. removeToDo(id)


### inputs

1. todo(@Object)
2. todoList(@todo[])
3. todoList(@todo[]), id(@Number)
4. todoList(@todo[])
5. todoList(@todo[]), id(@Number)
6. todoList(@todo[]), id(@Number)

### data

1. properties: id(@Number), text(@String), complete(@boolean)
2. todo(@Object), properties: id(@Number), text(@String), complete(@boolean)
3. todo(@Object), properties: id(@Number), text(@String), complete(@boolean)
4. todo(@Object), properties: id(@Number), text(@String), complete(@boolean)
5. todo(@Object), properties: id(@Number), text(@String), complete(@boolean)
6. todo(@Object), properties: id(@Number), text(@String), complete(@boolean)

### situations

1. the todo is created successfully
   the todo is not created due to missing inputs
2. todos exist in the list
   there are no todos in the list
3. all the todos we get are incomplete
   no incomplete todos found
4. all the todos we get are complete
   no complete todos found
5. the todo with a matching id exist
   no such todo exists
6. the todo with a matching id is found and removed
   no such todo exists

### outputs

HAPPY PATH

1. a string describing the newly created todo
2. a string listing all the tasks found in the todo list 
3. a string listing all the complete tasks found in the todo list
4. a string listing all the incomplete tasks found in the todo list
5. a unique todo item, the id of which matches the one inputed by the user
6. a string listing all the tasks found in the todo list, minus the one which was removed

UNHAPPY PATH

1. 'failed to create todo - missing input'
2. 'no todos added yet'
3. a string listing all the complete tasks found in the todo list
4. a string listing all the incomplete tasks found in the todo list
5. a unique todo item, the id of which matches the one inputed by the user
6. a string listing all the tasks found in the todo list, minus the one which was removed
