describe('todoListFunctions', () => {
  beforeEach(() => {
    const cache = require.cache
    for (const moduleId in cache) {
      delete cache[moduleId]
    }
  })

  describe('create', () => {
    it('add a new todo to the todo object with a unique id and incomplete status', () => {
      // Set up
      const { create } = require('../src/todolist.js')
      // Given
      const todo =
        'This is some text that represents a note that has been added'

      // When
      const result = create(todo)

      // Then

      expect(result).toEqual({ id: 1, text: todo, status: 'incomplete' })
    })
  })

  describe('get', () => {
    it('It is going to return the array with objects (the todos)', () => {
      // set up
      const { get, create } = require('../src/todolist.js')
      create('This is a note')

      // When
      const result = get()

      // Then

      expect(result).toEqual([
        {
          id: 1,
          text: 'This is a note',
          status: 'incomplete'
        }
      ])
    })
  })

  describe('setDone', () => {
    it('Will identify the todo by id and change the status to complete', () => {
      // Set up
      const { setDone, create } = require('../src/todolist.js')
      create('This is a note')

      // Given
      const id = 1

      // When
      const result = setDone(id)

      // Then
      expect(result).toEqual({
        id: 1,
        text: 'This is a note',
        status: 'complete'
      })
    })
  })

  describe('getIncomplete', () => {
    it('Will return the array of objects that have an incomplete status only', () => {
      // Set up
      const { getIncomplete, create, setDone } = require('../src/todolist.js')
      create('This is some text that represents a note that has been added')
      create('This is a third note that has been added')

      // When
      setDone(1)

      const result = getIncomplete()

      // Then
      expect(result).toEqual([
        {
          id: 2,
          text: 'This is a third note that has been added',
          status: 'incomplete'
        }
      ])
    })
  })

  describe('getComplete', () => {
    it('Will return the array of objects that have an complete status only', () => {
      // Set up
      const { getComplete, create, setDone } = require('../src/todolist.js')
      create('This is some text that represents a note that has been added')
      create('This is another note that has been added')
      create('This is another note that has been added')

      // When
      setDone(2)
      setDone(3)

      const result = getComplete()

      // Then
      expect(result).toEqual([
        {
          id: 2,
          text: 'This is another note that has been added',
          status: 'complete'
        },
        {
          id: 3,
          text: 'This is another note that has been added',
          status: 'complete'
        }
      ])
    })
  })

  describe('getById', () => {
    // Happy path
    it('Will search the todo array and return the object with the corresponding id passed through the function', () => {
      // set up
      const { getById, create, setDone } = require('../src/todolist.js')
      create('This is a note')
      create('THis is another note')
      create('This is a third note')
      create('This is a fourth note')
      create('This is a fifth note')
      setDone(3)
      setDone(4)

      // When
      const result = getById(5)

      // Then
      expect(result).toEqual({
        id: 5,
        text: 'This is a fifth note',
        status: 'incomplete'
      })
    })

    // Sad path
    it('Will return a message saying that the todo does not exist if there is no corresponding id in the todo array', () => {
      // Set up
      const { getById, create, setDone } = require('../src/todolist.js')
      create('This is a note')
      create('THis is another note')
      create('This is a third note')
      create('This is a fourth note')
      create('This is a fifth note')
      setDone(3)
      setDone(4)

      // When
      const result = getById(10)

      // Then
      expect(result).toEqual('The todo does not exist')
    })
  })

  describe('delete', () => {
    it('Will search to todo array and delete the todo that has the corresponding id and return the new updated array', () => {
      // Set up
      const { create, deleteTodo } = require('../src/todolist.js')
      create('This is a note')
      create('This is a second note')
      create('This is a third note')
      create('This is a fourth note')
      create('This is a fifth note')

      // When
      const result = deleteTodo(4)

      // Then
      expect(result).toEqual([
        { id: 1, text: 'This is a note', status: 'incomplete' },
        { id: 2, text: 'This is a second note', status: 'incomplete' },
        { id: 3, text: 'This is a third note', status: 'incomplete' },
        { id: 5, text: 'This is a fifth note', status: 'incomplete' }
      ])
    })
  })
})
