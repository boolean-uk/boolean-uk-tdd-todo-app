import { ToDoItem, ToDoManager } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do item should have ID, text, and be set to incomplete', () => {
    const item = new ToDoItem(1, 'Learn to code', false)

    expect(Object.keys(item)).toEqual(['id', 'todo', 'complete'])
  })

  it ('To do manager should have a get all todo items function', () => {

    expect(ToDoManager.getAllTodos).toBeFunction()
  })
})
