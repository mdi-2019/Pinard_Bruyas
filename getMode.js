const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


exports.getMode = function() {
  let mode
    while((mode != 0) && (mode != 1)){
      rl.question('Mode normal : 0 / Mode scientifique : 1', (answer) => {
        mode = answer
        if(mode == 0){
          console.log('Mode normal');
        }
        else if(mode == 1){
          console.log('Mode scientifique')
        }
        rl.close();
      });
    }
}

