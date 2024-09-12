// - Show all todo items

// Methods                      Inputs                     Scenario                                            Outputs
// showAllToDos                 objects                    if toDos exist show all                             toDoList[toDos]

const showAllToDos = require("../src/showAlltoDos")

describe("show all to do's", () => {
    it("should return a list of to do's", () => {
        //setup
        const id = 1
        const text = "hello"
        const status = "incomplete"
        const toDo = [{ id, text, status }, { id, text, status }]
        //execute
        const result = showAllToDos(toDo)
        //verify
        expect(result).toEqual(toDo)
    })

    it("it should return only incomplete to dos", () => {
        //setup
        const id = 1
        const text = "hello"
        const status = "incomplete"
        const toDo = [{ id, text, status }, { id, text, status: "complete" }]
        //execute
        const result = showAllToDos(toDo, status)
        //verify
        expect(result).toEqual([{ id, text, status }])
    })
})