// Add your domain model below

# create a todo item that has an ID , text description , and start off incomplete

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| createTodo( id , description ) | id(@number) description(@string) | | to input a description string | return a todoItem
|||| no description given | return false


# Get all todo items

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| GetToDo() | | | request items,there are items | returns an array of items
|||| requesting items,there are no items | returns false

# set a todo completed by its ID

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| setToDoComplete( id ) |  id(@number) | | input valid id | sets item completed and returns true
|||| No valid id | returns false

# only get todo items that are incomplete

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| getToDoInComplete() | | | request items, if there are incompleted items | returns an array of items that are incomplete
|||| requesting items, there are no items | returns false

# get only todo items that are complete

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| getToDoComplete() | | | request items, if there are completed items | returns an array of items that are completed
|||| requesting items, there are no items | returns false

# search and return a todo items by its ID or return a message that its saying it doesn't exist

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| searchToDo( id ) | id(@number) | | input and id that is valid | and object that is toDoItem
| ||| not valid id OR empty input | returns a string('Item not found')

# remove a todo item by its ID

|method | input | data | scnerio | output
|------ | ----- | ----- | ------ | ------
| removeItem( id ) | id(@number) | | valid id input | remove an object by its id
|||| invalid id | returns false


!