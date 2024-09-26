toDoItem js object
PROPERTIES
- id: number
- description: string
- status: string

CLASS toDoList
- id: 0
- items: array [empty]

METHODS
create(string)
INPUT: text of the todo

getItems
OUTPUT: the array of items

completeToDo(id)
INPUT: id of task you want to set as completed
OUTPUT: todo.status = 'completed'

getIncompleteTodos
OUTPUT: array of todos with the status 'incomplete'

getCompleteTodos
OUTPUT: array of todos with the status 'complete'

searchById(id)
INPUT: id of the todo
OUTPUT: returns the todo with the id or returns 'Does not exist'

deleteById(id)
INPUT: id of todo to delete
OUTPUT: todo removed from items list else 'Does not exist'
