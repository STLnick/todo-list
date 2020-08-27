export default {
  emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  lettersRegex: /^[a-zA-Z]+$/g,
  validateInput: (value, pattern) => value && value.match(pattern)
}
