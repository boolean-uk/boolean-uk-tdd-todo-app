import data from '../src/data.js'
import {
  completeById,
  completedTasks,
  getAll,
  createTask,
  searchById,
  removeById
} from '../src/todolist.js'

describe('Create Todo', () => {
  it('Return item with ID, name, provided description and complete set to false', () => {
    // setup
    const taskName = 'write tests'
    const taskId = 1
    const taskDescription = 'Stores List of tests'
    const taskComplete = false

    // execute
    createTask(taskName, taskId, taskDescription, taskComplete)

    // verify
    expect(data[0]).toEqual({
      taskName: 'write tests',
      taskId: 1,
      taskDescription: 'Stores List of tests',
      taskComplete: false
    })
  })
})

describe('Get all', () => {
  it('Return all of the task objects in the data array'),
    () => {
      //setup

      //execute
      const res = getAll(data)

      //verify
      expect(res).toEqual(data)
    }
})

describe('complete by ID', () => {
  it('return the item, and set task complete to true'),
    () => {
      //setup
      const taskId = 1

      //execute
      const res = completeById(taskId)

      //verify
      expect(res).toEqual({
        taskName: 'write tests',
        taskId: 1,
        taskDescription: 'Stores List of tests',
        taskComplete: true
      })
    }
})

describe('Get Complete Tasks', () => {
  it('return the items where task complete is true'),
    () => {
      //setup

      const complete = true

      //execute

      const res = completedTasks(complete)

      //verify

      expect(res).toEqual({
        taskName: 'write tests',
        taskId: 1,
        taskDescription: 'Stores List of tests',
        taskComplete: true
      })
    }
})

describe('Search Item', () => {
  it('Return item based on searched ID'),
    () => {
      //setup

      const taskId = 1

      //execute

      const res = searchById(taskId)

      //verify

      expect(res).toEqual({
        taskName: 'write tests',
        taskId: 1,
        taskDescription: 'Stores List of tests',
        taskComplete: false
      })
    }
})

describe('delete item', () => {
  it('remove the item with matching id from the data array '),
  () => {
    ///setup
    const taskId = 1
    
    //execute
    removeById(taskId)

    //verify
    expect(data).toEqual([])
  }
})
