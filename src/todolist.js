import data from './data.js'

//FUNCTIONS

const createTask = (taskName, taskId, taskDescription, taskComplete) => {
  data.push({
    taskName: taskName,
    taskId: taskId,
    taskDescription: taskDescription,
    taskComplete: false
  })
}

const getAll = (data) => {
  console.log('getAll', data)
}

const completeById = (givenTaskId) => {
  data.find((item) => {
    if (item.taskId === givenTaskId) {
      item.taskComplete = true
      console.log('completeById', item)
    }
  })
}

const completedTasks = (givenComplete) => {
  data.filter((item) => {
    if (givenComplete === item.taskComplete) {
      console.log(item)
    }
  })
}

const searchById = (givenTaskId) => {
  data.find((item) => {
    if (item.taskId === givenTaskId) {
      console.log('searchById', item)
    }
  })
}

const removeById = (givenTaskId) => {
    let filteredData = []
    data.map((item) => {
      if (item.taskId !== givenTaskId) {
       filteredData.push(item)
      }
    })
    console.log('removeById', filteredData)
  }

//CALL

createTask('write tests', 1, 'Stores List of tests', false)
createTask('write tests', 2, 'Stores List of tests', false)

removeById(1)
// getAll(data)
// completeById(1)

// completedTasks(true)
// searchById(2)

export { createTask, getAll, completeById, completedTasks, searchById, removeById }
