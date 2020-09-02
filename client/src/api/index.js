export default (baseUrl = 'http://localhost:5000') => ({
  async loginUser(userInfo) {
    const res = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    return await res.json()
  },

  async getUserTodos(userId) {
    const res = await fetch(`${baseUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId)
    })
    return await res.json()
  },

  async addTodo(newTodo) {
    const res = await fetch(`${baseUrl}/todos/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    return await res.json()
  },

  async toggleTodo(clickedTodo) {
    const res = await fetch(`${baseUrl}/todos/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clickedTodo)
    })

  },

  async deleteTodo() {

  }
})
