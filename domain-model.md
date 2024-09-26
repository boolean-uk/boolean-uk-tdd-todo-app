// Add your domain model below

|  <br>Objects  	|  <br>Properties  	|  <br>Functions  	|  <br>Input  	|  <br>Scenario  	|  <br>Output  	|
|---	|---	|---	|---	|---	|---	|
|  <br>toDo List  	|  <br>@array  	|  <br>@create() <br> <br>-create new list item  	|  <br>toDo: string -task id  	|  <br>-user create a new to do task   	|  <br>Item is pushed into array  	|
|  <br>toDo Items  	|  <br>@object  	|  <br>@complete() <br> <br>-change status of item to complete  	|  <br>task id  	|  <br>-user sets task as complete  	|  <br>Item status is changed to incomplete  	|
|  <br>  	|  <br>  	|  <br>@get() <br> <br>-get all items <br> <br>-get list of completed items<br> <br>-get list of incomplete items  	|  <br>toDo list: array of all tasks status of task: complete or incomplete  	|  <br>- user wants to see list of all tasks <br> <br>-user wants to see incomplete tasks<br> <br>-user wants to see complete tasks  	|  <br>Filtered toDo list is shown to user   	|
|  <br>  	|  <br>  	|  <br>@search()<br> <br>-find specified list item   	|  <br>toDo list: array of all tasks <br> <br>-task id  	|  <br>-user wants to find a specific task that exists<br> <br>-user wants to find a task that does not exist  	|  <br>-Search item is found and returned <br> <br>-Search item is not found null is returned  	|
|  <br>  	|  <br>  	|  <br>@remove()<br> <br>-remove list item from array  	|  <br>ToDo list: array of all tasks<br> <br>-task id  	|  <br>-user wants to delete a task from toDo list   	|  <br>Users deleted task is removed from task array  	|