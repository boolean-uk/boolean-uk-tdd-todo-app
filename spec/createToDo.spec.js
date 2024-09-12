// Methods                  Inputs                     Scenario                                            Outputs
// CreateToDoItem           text description(String)   string has been given to the function               toDoitem
//                                                                                                         {id, text, incomplete status}

const createToDo = require("../src/createToDo")

describe("create to do", () => {
    it("should return an object with an id, text and status", () => {
        //setup
        const text = "get milk"
        //execute
        const result = createToDo(text)

        //verify
        expect(result).toEqual({ id: 1, text: "get milk", status: "incomplete" })
    })
})