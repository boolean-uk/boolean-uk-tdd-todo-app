Class: ToDoList

Properties:

toDoArray: An array containing todo items with properties id, description, and completed.
Methods:

createToDo(description: string)

Description: Creates a new todo item with the given description and adds it to the array.
Return: No return value.
getAllItems()

Description: Retrieves all todo items in the array.
Return: Returns the array of todo items.
setCompletedById(id: number)

Description: Sets a todo item as completed based on its id.
Return: Returns true if successful, false if the todo item is not found.
getIncomplete()

Description: Retrieves all incomplete todo items.
Return: Returns an array of incomplete todo items.
getComplete()

Description: Retrieves all completed todo items.
Return: Returns an array of completed todo items.
searchById(id: number)

Description: Searches for a todo item by its id.
Return: Returns the todo item if found, or an error message if not found.
removeTodoById(id: number)

Description: Removes a todo item by its id.
Return: Returns true if successful (item removed), false if the todo item is not found.
Example Usage:

Create a ToDoList instance.
Add new todo items using createToDo.
Retrieve all todo items with getAllItems.
Mark a todo item as completed with setCompletedById.
Get incomplete and complete todo items with getIncomplete and getComplete.
Search for a todo item by id with searchById.
Remove a todo item by id with removeTodoById.
