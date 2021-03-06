/**
 * This file contain the normal mode of the calculator
 */

const math = require('mathjs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
   * Normal mode function
   */
let normalMode = function () {
  // Operande 1
  let a
  // Operande 2
  let b
  let operator
  let result
  rl.question('Opérande 1 ?', (answer) => {
    a = answer
    rl.question('Opérande 2 ?', (answer) => {
      b = answer
      rl.question('Opérateur ? (+, -, *, /)', (answer) => {
        operator = answer
        if (operator == '+') {
          result = parseInt(a) + parseInt(b)
          console.log(a + '+' + b + '=' + result)
        } else if (operator == '-') {
          result = parseInt(a) - parseInt(b)
          console.log(a + '-' + b + '=' + result)
        } else if (operator == '*') {
          result = parseInt(a) * parseInt(b)
          console.log(a + '*' + b + '=' + result)
        } else if (operator == '/') {
          result = parseInt(a) / parseInt(b)
          console.log(a + '/' + b + '=' + result)
        } else {
          normalMode()
        }

        rl.close()
      })
    })
  })
}

exports.normalMode = function () {
  normalMode()
}
