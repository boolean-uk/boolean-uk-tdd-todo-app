// Add your domain model below
Verbs: create, get, set, search, remove
nouns: todo item

Class ToDoList
Properties
-toDoArray(@{@number, @string, @boolean})

Methods
-CreateToDo(@string)
    no return
-GetAllItems()
    return toDoArray
-SetCompletedById(id@number)
    return success(@boolean)
-GetIncomplete()
    return incompleteArray(@{@number, @string, @boolean})
-GetComplete()
    return incompleteArray(@{@number, @string, @boolean})
-SearchById(id@number)
    return @{@number, @string, @boolean} / error (@string)
-removeTodoById(id@number)
    return success(@boolean)