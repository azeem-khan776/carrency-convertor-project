#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([{
            type: "list",
            name: "currencyInput",
            Choice: ["Pakistani Rupes", "US Doller", "Sudia Riyal"],
            message: "select your input currency"
        },
        {
            type: "number",
            name: "amountinput",
            message: "Enter the amount you want to convert"
        },
        {
            type: "list",
            name: "currencyOutput",
            Choice: ["Pakistani Rupes", "US Doller", "Sudia Riyal"],
            message: "select your output currency"
        }
    ]);
    const input = userInput.currencyInput;
    const output = userInput.currencyOutput;
    const amount = userInput.amountINput;
    if (input === "Pakistani Rupes") {
        if (output === "US Dollar") {
            console.log(`The ${amount} Pakistani Rupee is equal to ${amount / 281} US Dollar`);
        }
        else if (output === "Saudia Riyal") {
            console.log(`The ${amount} Pakistani Rupee is equal to ${amount / 75} Sodia Riyal`);
        }
    }
    else if (input === "US Dollar") {
        if (output === "Pakistani Rupee") {
            console.log(`The ${amount} US Dollar is equal to ${amount * 281} Pakistani Rupee`);
        }
        else if (output === "Sodia Riyal") {
            console.log(`The ${amount}US Dollar is equal to ${amount * 3.75} Sodia Riyal`);
        }
    }
    else if (input === "Saudia Riyal") {
        if (output === "Pakistani Rupee") {
            console.log(`The ${amount} saudia Riyal is equal to ${amount * 75} Pakistani Rupee`);
        }
        else if (output === "US Dollar") {
            console.log(`The ${amount} saudia Riyal is equal to ${amount / 3.75} US Dollar`);
        }
    }
    const calculateAgain = await inquirer.prompt({
        type: "confirm",
        name: "calculateMore",
        message: "Do you want more conversions?",
        default: false
    });
    if (!calculateAgain.calculateMore) {
        loop = false;
    }
}
