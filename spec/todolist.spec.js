const { createTodos, getAllTodos, getIncompleteTodos, getCompleteTodos, toggleCompleted } = require('../src/todolist.js')

describe("Todo list:", () => {
    it("(1) returns created Todo", () => {
        // setup
        const todoItem = {
            id: 0,
            text: "Write test code",
            completed: false
        }
        // execute
        const result = todoItem
        // verify
        expect(result).toEqual({
            id: 0, text: "Write test code", completed: false
        })
    })

    it("(2) fetches all todoItems", () => {
        // setup
        const todoList = [
            { id: 0, text: "create test codes", completed: false },
            { id: 1, text: "test the test codes", completed: false }
        ]
        getAllTodos(todoList)
        // execute
        const result = todoList
        // verify
        expect(result).toEqual(todoList)
    })

    it("(3) fetches incomplete todoItems", () => {
        // setup
        const todoList = [
            { id: 0, text: "create test codes", completed: true },
            { id: 1, text: "test the test codes", completed: false }
        ]
        // execute
        const expectedResult = [{ id: 1, text: "test the test codes", completed: false }]
        const result = getIncompleteTodos(todoList)

        // verify
        expect(result).toEqual(expectedResult)
    })

    it("(4) fetches complete todoItems", () => {
        // setup
        const todoList = [
            { id: 0, text: "create test codes", completed: true },
            { id: 1, text: "test the test codes", completed: false }
        ]
        // execute
        const expectedResult = [{ id: 0, text: "create test codes", completed: true }]
        const result = getCompleteTodos(todoList)

        // verify
        expect(result).toEqual(expectedResult)
    })

    it("(5) toggles completed status of todo", () => {
        // setup
        const todoList = [
            { id: 0, text: "create test codes", completed: true },
            { id: 1, text: "test the test codes", completed: false }
        ]
        // execute
        const expectedResult = [{ id: 0, text: "create test codes", completed: false },
        { id: 1, text: "test the test codes", completed: true }
        ]
        const result = toggleCompleted(id)

        // verify
        expect(result).toEqual(expectedResult)
    })



})
