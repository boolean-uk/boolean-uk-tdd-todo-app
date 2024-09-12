// Add your domain model below 

 Objects | Properties | Function | Input | Scenario | Output 
 --- | --- | --- | --- | --- | --- 
| todoItem | id, text description | create() | string - text descrpition | item with name does not exist | creates an item in the todo list
||||| item with name does exist | returns null
||| getAll() | N/A | Items are within the array | Returns all items in array to user
||||| No items are within the array | Returns an empty array
||| setComplete() | int - item id | item with id exists | changes status of item to complete
||||| No item with id exists | return null
||| getByStatus() | string - complete/incomplete | Items with string as status exist | return items in filtered array
||||| No items with string as status exist | return null
||| Search() | id | item with searched id exists | return targeted item
||||| No item with searched id exists | Return message stating no item exists
||| Remove() | id | item with given id exists | item is removed from array
||||| No item with given id exists | No item is removed and null returned
