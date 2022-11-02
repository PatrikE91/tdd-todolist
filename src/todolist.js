/* eslint-disable array-callback-return */
const todoList = [
  { id: 1, description: 'go to the grocery', status: 'complete' },
  { id: 2, description: 'clean the house', status: 'incomplete' }
]

function getAllTodos(list) {
  if (list.length) {
    // console.log(list)
    return
  }
  return false
}

function setToCompleted(list, id) {
  list.forEach((todo) => {
    if (todo.id === id) {
      todo.status = 'complete'
    }
  })
  return list
}
function getIncompleted(todoList) {
  const incompleteTodos = []
  todoList.forEach((todo) => {
    if (todo.status === 'incomplete') {
      incompleteTodos.push(todo)
    }
  })
  return incompleteTodos
}

function getCompleted(todoList) {
  const completeTodos = []
  todoList.forEach((todo) => {
    if (todo.status === 'complete') {
      completeTodos.push(todo)
    }
  })
  return completeTodos
}

function searchTodo(list, id) {
  const selectedTodo = []
  list.find((todo) => {
    if (todo.id === id) {
      selectedTodo.push(todo)
    }
  })
  console.log(selectedTodo)
  return selectedTodo.length ? selectedTodo : 'todos not found'
}

function deleteTodo(list, id) {
  list.map((todo) => {
    if (todo.id === id) {
      list.splice(list.indexOf(todo), 1)
    }
  })
  console.log(list)
}

deleteTodo(todoList, 1)

module.exports = {
  setToCompleted,
  getAllTodos,
  getIncompleted,
  getCompleted,
  searchTodo,
  deleteTodo
}
