/**
 * This file contain a function to make a scientific calculation
 */
const readline = require('readline')
const math = require('mathjs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let scientific = function () {
  rl.question('> ', (answer) => {
    if (answer == 'exit') {
      return rl.close()
    }
    let result = math.eval(answer)
    console.log(result)
    scientific()
  })
}

exports.scientific = function () {
  scientific()
}
