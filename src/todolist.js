const existingTodoList = [
  {
    id: 1,
    text: 'I will be going to the gym',
    status: 'incomplete'
  },
  {
    id: 2,
    text: 'I am going for a date',
    status: 'incomplete'
  },

  {
    id: 3,
    text: 'I am going for new year eve event',
    status: 'complete'
  }
]

class Todolist {
  constructor() {
    this.todolists = existingTodoList;
  }
  create(newTodo) {
    const newId =
      this.todolists.length > 0
        ? this.todolists[this.todolists.length - 1].id + 1
        : 1

     this.todolists.push({
      id: newId,
      text: newTodo,
      status: 'incomplete'
    })

    return this.todolists
  }



  getAllTodo() {
    return this.todolists.length > 0 ? true : false;
  }

  setComplete(todoId) {
    const index = this.todolists.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
      this.todolists[index].status = 'complete';
      return 'status changed';
    } else {
      return 'Todo not found';
    }
  }

  getIncompleteTodos() {
    return this.todolists.filter((todo) => todo.status === 'incomplete')
  }

  getCompleteTodos() {
    return this.todolists.filter((todo) => todo.status === 'complete')
  }

  searchTodoById(todoId){
    return this.todolists.find((todo)=> todo.id === todoId)
  }

  removeById(id){
    return this.todolists.filter((todo)=> todo.id !== id)
  }
}







module.exports = {
  Todolist,
  existingTodoList
}
