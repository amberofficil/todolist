#! /usr/bin/env node
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
console.log('===============Welcome To the TO DO List App===============');
let myList = [];
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "query",
            message: "What do you want to do in TO DO Application: ",
            choices: ["View List", "Add items in List", "Delete Items", "Quit"]
        }
    ]);
    if (answer.query === "View List") {
        for (let item of myList) {
            console.log(myList.indexOf(item) + ': ' + item);
        }
    }
    else if (answer.query === 'Add items in List') {
        let input = prompt('Enter your To Do Item here: ');
        myList.push(input);
        console.log(`"${input}",added in the list`);
    }
    else if (answer.query === 'Delete Items') {
        for (let item of myList) {
            console.log(myList.indexOf(item) + ': ' + item);
        }
        let deleteIndex = Number(prompt('Enter Index number of item that you want to delete: '));
        console.log(`${myList[deleteIndex]} , is now removed from the list`);
        myList.splice(deleteIndex, 1);
    }
    else {
        console.log('================  thanks for using the App...Good Bye  =====================');
        break;
    }
}
