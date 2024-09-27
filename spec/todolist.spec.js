const {Todolist, existingTodoList}= require('../src/todolist.js')




describe('TDD todoList', () => {
  const todoItemListInstance = new Todolist()


describe('Can create a new todo', ()=>{
  it('creates a todo item with an ID, text description, and incomplete status', () => {
  
    const newTodoText = 'I am traveling'
    const newId = existingTodoList.length + 1
  
    const result = todoItemListInstance.create(newTodoText)
     
    expect(result).toEqual(existingTodoList)
  

  })
})


  describe('Can see all the existing todoList',()=>{

    it('Get all todo items', () => {
      const result = todoItemListInstance.getAllTodo()
      expect(result).toBeTrue()
    })
  })

  describe('Can change the status of a todo by its ID',()=>{

    it('set a todo status to completed by its ID', () => {
      const result = todoItemListInstance.setComplete(1)
      expect(result).toEqual('status changed')
    })
  

  })


  describe('Can get all todos with incomplete status', ()=>{

    it('get todo items that are incomplete', () => {
      const allIncompleteTodo = existingTodoList.filter(
        (todo) => todo.status === 'incomplete'
      )
      const result = todoItemListInstance.getIncompleteTodos()
  
      expect(result).toEqual(allIncompleteTodo)
    })
  })


  describe('Can get todos with complete status',()=>{

    it('get todo items that are complete', () => {
      const allCompleteTodo = existingTodoList.filter((todo) => todo.status === 'complete')
      const result = todoItemListInstance.getCompleteTodos()
  
      expect(result).toEqual(allCompleteTodo)
    })

    describe('Can search or return a todo item by its ID', ()=>{

      it('Search and return a todo item by its ID, or return a message saying it doesn’t exist', () => {
        const todoId = 2;
        const searchResult = todoItemListInstance.searchTodoById(todoId);
        const expectedResult = existingTodoList.find((todo) => todo.id === todoId) || 'doesnt exist';
      
        expect(searchResult).toEqual(expectedResult);
      });
      
    })

    describe('Can remove todo by id ', ()=>{

      it('Remove a todo item by its ID', () => {
        const idTobeRemoved = 2
    
        const removeTodowithId = existingTodoList.filter((todo) => todo.id !== idTobeRemoved)
        
        const result = todoItemListInstance.removeById(idTobeRemoved)
    
    
        expect(result).toEqual(removeTodowithId)
      })
    })
  })







})
