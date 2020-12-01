// importing
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What's your email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What's the title for this project?",
        name: "Title",
    },
    {
        type: "input",
        message: "What's this project about? Write a brief description",
        name: "Description",
    },
    {
        type: "input",
        message: "What are some guidelines for installation?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is the project used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contribution",
    },
    {
        type: "input",
        message: "What are some testing instructions?",
        name: "Testing",
    },

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./ReadMeBin"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log(fileName + "successfully generated!")
        }

    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("GoodREADME.md", generatorMarkdown(data));
    });

}

// function call to initialize program
init();
