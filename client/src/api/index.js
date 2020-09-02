export default (baseUrl = 'http://localhost:5000') => ({
  async index() {
    const res = await fetch('https://my-json-server.typicode.com/Claim-Academy-JS/todos/todos')
    return await res.json()
  },

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
  }
})
