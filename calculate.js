const readline = require('readline');
const math = require('mathjs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

scientific = function() {
rl.question('> ', (answer) => {
    if(answer == "exit"){
        return rl.close()
    }
    let result = math.eval(answer)
    console.log(result)
    calc();
});
}

exports.scientific() = function() {
    scientific();
}
