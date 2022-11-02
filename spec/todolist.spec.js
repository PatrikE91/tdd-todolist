const {
  setToCompleted,
  getAllTodos,
  getIncompleted,
  getCompleted,
  searchTodo,
  deleteTodo
} = require('../src/todolist')

describe('getAllTodos', () => {
  it('should print all the todos if any', () => {
    const todoList = []
    const result = getAllTodos(todoList)
    expect(result).toEqual(false)
  })
})

describe('setToCompleted', () => {
  it('should change the todo status to completed', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'incomplete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = setToCompleted(todoList, 1)
    expect(result).toEqual([
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ])
  })
  it('should change only the given id', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'incomplete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = setToCompleted(todoList, 1)
    expect(result).not.toEqual([
      { id: 1, description: 'go to the grocery', status: 'incompleted' },
      { id: 2, description: 'clean the house', status: 'complete' }
    ])
  })
})

describe('getIncompleted', () => {
  it('should return incompleted todos', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = getIncompleted(todoList)
    expect(result).toEqual([
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ])
  })

  it('shold not return completed todos', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = getIncompleted(todoList)
    expect(result).not.toEqual([
      { id: 1, description: 'go to the grocery', status: 'complete' }
    ])
  })
})

describe('getCompleted', () => {
  it('should return completed todos', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = getCompleted(todoList)
    expect(result).toEqual([
      { id: 1, description: 'go to the grocery', status: 'complete' }
    ])
  })
  it('shold not return incompleted todos', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = getCompleted(todoList)
    expect(result).not.toEqual([
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ])
  })
})

describe('searchTodo', () => {
  it('should return only the selected todo', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = searchTodo(todoList, 1)
    expect(result).toEqual([
      { id: 1, description: 'go to the grocery', status: 'complete' }
    ])
  })
  it("should return a message if doesn't exist", () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'complete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = searchTodo(todoList, 42)
    expect(result).toBe('todos not found')
  })
})

describe('deleteTodo', () => {
  it('should delete the only the selected todo', () => {
    const todoList = [
      { id: 1, description: 'go to the grocery', status: 'incomplete' },
      { id: 2, description: 'clean the house', status: 'incomplete' }
    ]
    const result = deleteTodo(todoList, 1)
    expect(result).not.toEqual([
      { id: 1, description: 'go to the grocery', status: 'incomplete' }
    ])
  })
})
