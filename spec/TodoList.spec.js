const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("creates a different todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heater off!",
      status: "incomplete"
    }
  
      // execute
    const result = todoList.create("turn the heater off!")
      
      // verify
    expect(result).toEqual(expected)
  })

  it("id should be incremented every time", () => {
    // setup
    const todoList = new TodoList()
    const FirstTodo = {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }
    // const completedOne = todoList.create("turn the heater on!")
    // expect(completedOne).toEqual(FirstToDo)

    const SecondTodo = {
      id: 2,
      text: "turn the heater off!",
      status: "incomplete"
    }

    todoList.create("turn the heating on!")
    const result = todoList.create("turn the heater off!")
    expect(result).toEqual(SecondTodo)

  })
  it("FirstTodo should be removed since its completed", () => {
    const todoList = new TodoList()
    todoList.create("turn the heating on!");
    const expected = {
      id: 1,
      text: "turn the heater on!",
      status: "incomplete"
    }
    const result = todoList.deleteTodo(1);
    // verify
    expect(result).toEqual(expected);
  })
})






    // execute
    // const outcome = 
    // verify
    // expected(outcome).toEqual(expected.status)
