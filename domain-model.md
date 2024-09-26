# Domain Models

## Create Todo

```
As a user,
I should be able to create a todo item,
I want to be able to see its ID, description and have it incompleted to start.
```

### Keywords

1. **Verbs:** create, see
2. **Nouns:** item, ID, description, incompleted

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| ToDoItem | CLASS | description(@string), ID(@number), completedStatus(@boolean) | if there is a string | return a string with the description
| ------ | ------ | ------ | if there is not string | return 'Please enter a todo!'

## Get Todos

```
a user,
should be able to see all todo items,
they should be in a list.
```

### Keywords

1. **Verbs:** see
2. **Nouns:** items, list

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getTodos | () | description(@string) | if descriptions available to grab  | return descriptions as a string
| ------ | ------ | ------ | ----- | return "No todo items"

## Set todo to completed

```
As a user,
I should be able to complete a todo item,
I would like to click an item and see it change to completed on its ID
```

### Keywords

1. **Verbs:** complete, click, see, change
2. **Nouns:** user, item, completed, ID

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| setTodo | (ID) | ID(Number) | If that ID.completed is false | completed: true
| ------ | ------ | ------ | If that ID.completed is true | completed: false

## Get Incompleted

```
A user, 
should be able to filter only incompleted todo items,
They should be able to click a box.
```

### Keywords

1. **Verbs:** filter, click
2. **Nouns:** user, items, box

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getIncompleted | () | todo.completed(@boolean) | it should loop through all todos and if the boolean is false | return todo.description
| ------ | ------ | ------ | if the boolean is true | return false
| ------ | ------ | ------ | ----- | -----
| ------ | ------ | ------ | ----- | -----

## Get Completed Todos

```
A user,
should be able to filter and display completed todos,
They should be able to click a box.
```

### Keywords

1. **Verbs:** filter, display, click
2. **Nouns:** todos, completed, box

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getCompleted | () | todo.completed(@boolean) | it should loop through all todos and if the boolean is true | return todo.description
| ------ | ------ | ------ | if the boolean is false | return false


## Next Function

```
A user,
should be able to search for a todo by its ID,
they should do this by entering a number into the search field.
```

### Keywords

1. **Verbs:** search, entering
2. **Nouns:** todo, ID, number, field

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| findTodo | (ID) | ID(@number) | if the number matches an mapped todo | return that todos description
| ------ | ------ | ------ | if the number does not match any todo's ID's or ID does not exist | return "This todo does not exist"


## Remove a todo

```
a user,
should be able to remove a todo by its ID
by clicking on a delete button.
```

### Keywords

1. **Verbs:** remove, clicking
2. **Nouns:** todo, ID, button

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| removeTodo | (ID) | ID(@number) | if the number matches a mapped ID number | that ID should be removed from the state.
| ------ | ------ | ------ | if the number does not match a mapped ID number | return false

