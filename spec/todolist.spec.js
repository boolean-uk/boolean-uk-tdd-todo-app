/* eslint-disable prettier/prettier */
const TodoList  = require('../src/todolist.js')

describe('todolist', () => {
    describe('create', () => {
        it('can create todo', ()  => {
            const todolist = new TodoList()
            todolist.create('clean the room ')
            expect(todolist.todoList.length).toBe(1)
        })


        it('can get all the todos from the list', () => {
            const todolist = new TodoList()
            todolist.create('clean the room', 'complete')
            todolist.create('clean the house', 'incomplete')
            todolist.create('create the things', 'complete')

            const getAllTodo = todolist.getAll()
            expect(getAllTodo.length).toBe(3)
        })


        it('get all the completed todo', () => {
            const todolist = new TodoList()
            todolist.create('clean the room', 'complete')
            todolist.create('clean the house', 'incomplete')
            todolist.create('create the things', 'complete')

            const completedTodo = todolist.getCompletedTodo()
            console.log(completedTodo)
            expect(completedTodo.length).toBe(2)
        }) 


        it('get the incompleted Todo', () => {
            const todolist = new TodoList()
            todolist.create('clean the room', 'complete')
            todolist.create('clean the house', 'incomplete')
            todolist.create('create the things', 'complete')

            const incompleteTodo = todolist.getInCompleteTodo()
            console.log(incompleteTodo)
            expect(incompleteTodo.length).toBe(1)

        })

        
        it('delete a todo', () => {
            const todolist = new TodoList() 
            todolist.create('clean the room', 'complete')
            todolist.create('clean the house', 'incomplete')
            todolist.create('create the things', 'complete')

            const todoToDelete = 3

            todolist.deleteTodo(todoToDelete)
            const getAllTodo = todolist.getAll()
           
            expect(getAllTodo.length).toBe(2)
        })

        it('get particular todo', () => {
            const todolist = new TodoList()
            todolist.create('clean the room', 'complete')
            todolist.create('clean the house', 'incomplete')
            todolist.create('create the things', 'complete')

            const expectedTodo = {
                id: 1,
                text: 'clean the room',
                status: 'complete'
            };


            const getParticularTodo = todolist.getSingleTodo(1)
           
            expect(getParticularTodo).toEqual(expectedTodo)
        })

    })


})