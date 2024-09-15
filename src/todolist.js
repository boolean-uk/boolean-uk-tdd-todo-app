/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
class TodoList {
    constructor() {
        this.todoList = []
    }


    create(description, status) {
        const id = this.todoList.length + 1
        const newItem = {
            id,
            text: description,
            status: status
        }
        
        this.todoList.push(newItem)
    }



    getAll() {
        return this.todoList
    }



    getCompletedTodo() {
        return this.todoList.filter((item) => item.status === 'complete')
    }



    getInCompleteTodo() {
        return this.todoList.filter((item) => item.status === 'incomplete')
    }



    deleteTodo(todoToDelete) {
        const indexToDelete = this.todoList.findIndex((todo) => todo.id === todoToDelete)
        if(indexToDelete !== -1) {
            console.log(indexToDelete)
            this.todoList.splice(indexToDelete, 1)
        } else {
            return 'item to delete cant be fund'
        }
    }



    getSingleTodo(searchedTodo) {
        const itemSearched = this.todoList.find((todo) => todo.id === searchedTodo)

        if(itemSearched) {
            return itemSearched
        } else {
            return 'Todo you searched is not found!'
        }
    }
}


module.exports = TodoList


