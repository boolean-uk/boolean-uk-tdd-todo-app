// Add your domain model below
toDoList array of js objects: []
toDoItem js object
PROPERTIES:
    - id: number
    - description: string
    - status: string
createToDo(id, description, status) -> 
    INPUTS:
    - id: number
    - description: string
    - status: string
makes a js object with keys and values matching above and pushes the object to the toDoList array. 
getAll(toDoList) -> 
    returns "no todo's" if array is empty
    returns a toDolist array if toDOlist items are present.
setStatus(number) -> 
    finds the object in the the array with the id matching the number parameter 
    sets toDoItem.status to completed
getIncomplete(toDoList) -> 
    filters the toDolist array for toDoItem.status matching incomplete and returning filterd array
getCompleted(toDoList) -> 
    filters the toDolist array for toDoItem.status matching complete and returning filterd array
findTodo(number) -> 
    finds the object in the the array with the id matching the number parameter
    if no object matches the number parameter return "no ToDo exist matching this ID"
    if it does return the toDO Item with ID matching number
removeToDo(number) ->
    finds the object in the the array with the id matching the number parameter
    removes the toDoItem with the corresponding id
