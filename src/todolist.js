class TodoList {
    constructor() {
        this.toDoArray = []
    }

    create(todo) {
        if(todo && typeof todo !== 'string') {
            return `ERROR: Input is not a string`
        }

        if(!todo){
            return `ERROR: Please provide an input`
        }
        const toDoItem = {
            id: this.toDoArray.length + 1,
            text: todo,
            status: 'incomplete'
        }
        this.toDoArray.push(toDoItem)
        return toDoItem
    }

    getAll() {
        if(this.toDoArray.length === 0) {
            return `ERROR: No todo items exist`
        }
        return this.toDoArray
    }

    setComplete(id) {        
        const newArray = this.toDoArray.filter((item) => item.id === id)
        if(newArray.length === 0) {
            return `ERROR: Id does not exist`
        }
        const target = newArray[0]
        if(target.status === 'complete') {
            return `ERROR: Id is already complete`
        }
        target.status = 'complete'
        return target
    }

    getIncomplete() {
        const newArray = this.toDoArray.filter((item) => item.status === 'incomplete')
        if(newArray.length === 0) {
            return 'ERROR: No incomplete tasks exist'
        }
        return newArray
    }
    getComplete() {
        const newArray = this.toDoArray.filter((item) => item.status === 'complete')
        if(newArray.length === 0) {
            return 'ERROR: No complete tasks exist'
        }
        return newArray
    }
    search(id) {
        const newArray = this.toDoArray.filter((item) => item.id === id)
        if(newArray.length === 0) {
            return `ERROR: Id does not exist`
        }
        const target = newArray[0]
        return target
    }
    remove(id) {
        const newArray = this.toDoArray.filter((item) => item.id === id)
        if(newArray.length === 0) {
            return 'ERROR: Id does not exist'
        }
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray.id === id) {
                this.toDoArray.splice(i)
            }
        }
        return `task of id ${id} has been deleted`
    }
}
module.exports = { TodoList }
