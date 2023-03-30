// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What license are you using?",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Provide test instructions",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer
    .prompt(questions)
    .then((data) =>
      fs.writeFile("README.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Success")
      )
    );
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
