// Add your domain model below
## Create a todo item that has an ID, text description, and starts off incomplete

NOUN 
Todo Item 
ID

VERB
Create
Start off

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
|createTodo(todolist@[], newTodo@string)|todolist@string[], newTodo@string| If a todo item is created with an ID| True|
||| If a todo item isn't created with an ID| False


##  Get all todo items

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| getAllTodoItem(todolist@[])| todolist@string[] | if there are existing todo items | List of the todo items|
||| if there are not existing todo items | List empty


## Set a todo completed by its ID

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| setCompleted()| todo@string, id| if todo is completed or done let the todo be marked as completed| true


## Get only todo items that are incomplete

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| getIncompleteItems()| todolist@string[] | get items if they are incomplete | true


## Get only todo items that are complete

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| getCompleteItems()| todolist@string[] | get items if they are complete | true



## Search and return a todo item by its ID, or return a message saying it doesn’t exist

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| searchTodo()| todolist@string[] , ID | if any of the todoList Ids match with the searchID| matchedTodo |
|||  if any of the todoList Ids doesnt match with the searchID, return the todo | doesn’t exist|



## Remove a todo item by its ID

| Method | Input | Scenerio | Output|
| -------| ------| ---------|-------|
| removeTodo()| todolist@string[] , ID | if ID matched with any of todoList Ids| Remove todo|
