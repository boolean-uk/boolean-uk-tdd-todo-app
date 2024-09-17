// Add your domain model below

| object | properties              |
| ------ | ----------------------- |
| todo   | id, description, status |

| method               | input                           | Output                                           |
| -------------------- | ------------------------------- | ------------------------------------------------ |
| create()             | description for todo item (str) | todoItem (obj)                                   |
| getItems()           | none                            | array of all todo items (arr of obj)             |
| completeTodo()       | todo ID (int)                   | todo item with updated status (obj)              |
| getIncompleteTodos() | none                            | full array of incomplete todo items (arr of obj) |
| getCompleteTodos()   | none                            | full array of complete Todo items (arr of obj)   |
| searchId()           | todo ID (int)                   | todo Item (obj) or error (str)                   |
| deleteId()           | todo ID (int)                   | array of all of todo items (arr) or error (str)  |
