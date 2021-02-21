
const chalk = require('chalk');

var min = 0
var max = 5000;

var primeArray;

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

var primeN = 0

for(var i = min; i < max; i++){
    if(isPrime(i)){ 
        primeN++ 
        var bynary = i.toString(2)
        var element = null;
        do {
            for (j = 0; j < bynary.length; j++){
                    if (bynary[j] == 1) {process.stdout.write(chalk.red(bynary[j]))}
                    else {process.stdout.write(bynary[j])}
        }
        }while (j<bynary.length)

        console.log(
            chalk.blue( '   [' + primeN + '] = ') + chalk.green(i)
        );
    }
}