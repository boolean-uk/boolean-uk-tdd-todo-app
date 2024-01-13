const { Todo, TodoList } = require('../src/todolist.js')

describe('TodoList', () => {
  it('should create a todo item with ID, text description, and start off incomplete', () => {
    const todoList = new TodoList()
    const todoText = 'Complete TDD test'

    const todo = todoList.create(todoText)

    expect(todo).toBeInstanceOf(Todo)
    expect(todo.id).toBe(1)
    expect(todo.text).toBe(todoText)
    expect(todo.completed).toBe(false)
  })

  it('should get all todo items', () => {
    const todoList = new TodoList()
    const todo1 = todoList.create('Complete TDD test')
    const todo2 = todoList.create('Implement get all todos')

    const allTodos = todoList.getAll()

    expect(allTodos).toHaveLength(2)
    expect(allTodos).toContainEqual(todo1)
    expect(allTodos).toContainEqual(todo2)
  })
})
