// Add your domain model below
// Add your domain model below
# Create a todo item that has an ID, text description, and starts off incomplete

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| createToDo(  description ) |  description(@string) | | to input a description string | returns a todoItem
|||| No description given | returns false

# Get all todo items

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| GetToDo() | | | request items,there are items | returns an array of items
|||| requesting items,there are no items | returns false

# Set a todo completed by its ID

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| setToDoComplete( id ) |  id(@number) | | input valid id | sets item completed and returns true
|||| No valid id | returns false

# Get only todo items that are incomplete

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getToDoInComplete() | | | request items, if there are incompleted items | returns an array of items that are incomplete
|||| requesting items, there are no items | returns false

# Get only todo items that are complete

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| getToDoComplete() | | | request items, if there are completed items | returns an array of items that are completed
|||| requesting items, there are no items | returns false

# Search and return a todo item by its ID, or return a message saying it doesn’t exist

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| searchToDo( id ) | id(@number) | | input and id that is valid | and object that is toDoItem
| ||| no valid id OR empty input | returns a string('Item not found')

# Remove a todo item by its ID

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| removeItem( id ) | id(@number) | | valid id input | remove an object by its id 
||||  invalid id | returns false


