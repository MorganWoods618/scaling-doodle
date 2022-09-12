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
        message: "Description"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests"
    },
    {
        type: "list",
        name: "license",
        message: "What is your app licensed under?",
        choices: ["Apache", "MIT", "Mozilla", "None"]
    },
];

// Function to initialize app and write README file
// Error prompt
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

//title of my project and sections entitled 
//*******setup Description, 
//*******Table of Contents, 
//*******Installation, 
//*******Usage, 
//setup License, 
//*******Contributing, 
//*******Tests, and 
//*******Questions