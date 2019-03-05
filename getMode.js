const readline = require('readline')
const normalMode = require('./normalMode')
const calculate = require('./calculate')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let getMode = function () {
  let mode
  rl.question('Mode normal : 0 / Mode scientifique : 1 \n', (answer) => {
    mode = answer
    if (mode == 0) {
      console.log('Mode normal')
      normalMode.normalMode()
    } else if (mode == 1) {
      console.log('Mode scientifique')
      calculate.scientific()
    } else {
      getMode()
    }
  })
}
exports.getMode = function () {
  getMode()
}
