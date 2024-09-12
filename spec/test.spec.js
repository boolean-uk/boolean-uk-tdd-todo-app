// Methods                  Inputs                  Scenario                    Outputs
// getTotalCost(basket)     @Object[]               If an array of items        @number
//                          [{id, name, price}]    is passed in

//                          If the array given                                   0
//                          is empty


const getTotalCost = require("../src/getTotalCost")

describe("get total cost", () => {
    it("should give total cost of basket", () => {
        //setup
        const items = [{ price: 2 }]

        //execute
        const result = getTotalCost(items)

        //verify
        expect(result).toEqual(2)
    })
})