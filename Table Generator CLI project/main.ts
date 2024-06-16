#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));
console.log( chalk.magentaBright.bold("\n\t\t          Welcome to Table Generator CLI Project \n "));
console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));

let myTable = true;

while(myTable){

    let myInput = await inquirer.prompt({
        type: 'number',
        name: 'num',
        message: "Enter your Number : "
    })
    
    let myNumber = myInput.num;
   //console.log(myNumber);
    if(myNumber){
        console.log(chalk.greenBright(`Here is the table of ${myNumber} \n`));

        for(let i = 1; i <= 10; i++){
            console.log(chalk.yellow(`${myNumber} x ${i} = ${myNumber * i}`));
        }
    }
    else{
        console.log(chalk.redBright(`Enter a input in numerical form \n`))
    }
    
    let againPrint = await inquirer.prompt({
        type :'confirm',
        name: 'askUser',
        message: "Do you want to print another Table?",
        default: false
    });

    if(againPrint.askUser == false){
        myTable = false;
        console.log(chalk.bold.blueBright('\n Thank You !!!!'))
    }
}