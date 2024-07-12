// verging towards OOP (classes and instances)

const todoApp = {
    id: 0,
    items: [], // for show all requirement

// storing the value of 0 in id and everytime you call it increment it by 1
   create: function (text) {
        this.id++   // increment id by one
        const item = {
            id: this.id, // sets the portery to be that value
            text: text,     //passing text in the argument
            status: "incomplete"
        }
        this.items.push(item)
        return item
    },

    showAll: function () {
        return this.items
    }
}


module.exports = todoApp











// For create an Item (1st Requirement)

// create: function (text) {
//     this.id++   // increment id by on
//     console.log(this.id)
//     return {                  
//         id: this.id, // sets the property to be that value
//         text: text,     //passing text in the argument
//         status: "incomplete"
//     }
// },`