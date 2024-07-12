const todoApp = require("../src/todoApp.js")

describe("Todo App", () => {
    // manual teardown
    beforeEach(()=> {
        console.log("in the beforeEach")
        todoApp.id = 0
        todoApp.items = []
    })
    
    it("creates a todo item", () => { 
        // set up
        const expected = {                  // expected = output from domain table
            id: 1,
            text: "brush teeth!",
            status: "incomplete"
        }
        // execute
        expect(todoApp.create("brush teeth!")).toEqual(expected) //if I call this create functon with this argument then I get this value (expected)
        // verify
        // teardown
    })

    it("creates multiple todo items", () => {
        // set up
        const item1 = todoApp.create("Cook breakfast")    // create 1st item
        const item2 = todoApp.create("brush teeth!") // create 2nd item
        // const expected = {                  // expected = output from domain table
        //     id: 2,
        //     text: "brush teeth!",
        //     status: "incomplete"
        // }
        // execute
        expect(item1.id).toEqual(1)
        expect(item2.id).toEqual(2)
        // verify
        // teardown
    })

    it("shows all the todo items", () => {
        //set up
        todoApp.create("Cook breakfast")
        todoApp.create("Brush teeth!")
        const expected = [
            {
                id: 1,
                text: "Cook breakfast",
                status: "incomplete"
            },
            {
                id: 2,
                text: "Brush teeth!",
                status: "incomplete"
            }
        ]
        //execute
        const items = todoApp.showAll()

        //verify
        expect(items).toEqual(expected)
    })
})