// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Come up with questions"
    },
    {
        type: "list",
        name: "license",
        message: "What is your app licensed under?",
        choices: ["Apache", "MIT", "Mozilla", "None"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        fs.writeFileSync("README.md", generateMarkdown (data), err => {
            console.log(err)
        })
    })
}

// Function call to initialize app
init();




//github and email question and throw the data to the questions section in generate markdown