// Add your domain model below

**Objects**
todo item - properties: ID(num), description(string), status(string)
todo list - properties: array of objects 

**functions**
get() 
setAsCompleted() - input: id(num)
create() - input: todo name(string)
filter() - input: status(string)
search() - input: id(num)
delete() - input: id(num)

**scenarios:outputs**
todo list found: return todolist
todo with item id exists: update status of/delete/return todo
todo with item id doesn't exist: return null




