// importing
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
