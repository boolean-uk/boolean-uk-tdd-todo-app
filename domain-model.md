// Add your domain model below

# Requirements

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

    Create a todo item that has an ID, text description, and starts off incomplete
    Get all todo items
    Set a todo completed by its ID
    Get only todo items that are incomplete
    Get only todo items that are complete
    Search and return a todo item by its ID, or return a message saying it doesn’t exist
    Remove a todo item by its ID

# Assumptions

that I can use "completed=== true || completed === false" instead of "status: string"
that

# Model:

verbs: create(todo item), set status (of todo), view/render, remove, search
noun: todo item: id + description + status

class todoItem(object)
{-id: number
-text: "string"
-completed: boolean
(false)
}

class todoList (array of todo){
-todos: [todoItem]
}

## METHOD

1. createTodo(todo item)

2. getAllTodos
   OUTPUT:
   todos

3. getCompleteTodos(completed)
        OUTPUT:
        if completed === true: render complete tasks
4. getCompleteTodos(completed)
        OUTPUT:
        if completed === false: render incomplete tasks

5. toggleCompleted
        OUTPUT:
        !completedStatus

6. searchTodo(id)
        OUTPUT:
        if exists: todoItem
        else: return error msg

7. removeTodo(id)
        OUTPUT: todos - todoItem(id)
