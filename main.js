import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 21307;
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin code :"
    }
]);
if (answer.pin == myPin) {
    console.log("Correct pin code");
    const option = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "What do you want to do ?",
            choices: ["Withdraw", "CheckBalance", "FastCash"]
        }
    ]);
    if (option.operation === "Withdraw") {
        const Withdraw = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter your amount "
            }
        ]);
        console.log(`Your remaining amount is ${myBalance - Withdraw.amount}`);
    }
    else if (option.operation === "CheckBalance") {
        console.log(`Your current Balance is ${myBalance}`);
    }
    else if (option.operation === "FastCash") {
        const fast = await inquirer.prompt([
            {
                type: "list",
                name: "cash",
                message: "How many amount woud you like to withdraw ?",
                choices: ["1000", "2000", "5000"]
            }
        ]);
        if (fast.cash === "1000") {
            console.log(`Your remaining amount is ${myBalance - fast.cash}`);
        }
        else if (fast.cash === "2000") {
            console.log(`Your remaining amount is ${myBalance - fast.cash}`);
        }
        else if (fast.cash === "5000") {
            console.log(`Your remaining amount is ${myBalance - fast.cash}`);
        }
        else {
            console.log("Please select invalid option");
        }
    }
}
else {
    console.log("Incorrect pin code");
}
