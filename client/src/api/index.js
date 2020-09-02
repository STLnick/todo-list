export default (baseUrl = 'http://localhost:5000') => ({
  async index() {
    const res = await fetch('https://my-json-server.typicode.com/Claim-Academy-JS/todos/todos')
    return await res.json()
  },
}
