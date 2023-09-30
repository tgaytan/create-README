// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "Type your project title",
    "Add a description",
    "Do you want a table of contents?",
    "What are the installation steps?",
    "What is the usage?",
    "Any credits?",
    "List any relevant licenses"
];

// TODO: Create a function to write README file
var writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err =>
        err ? console.error(err): console.log("newREADME.md created successfully")
    );
}

// TODO: Create a function to initialize app
var init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'confirm',
                message: questions[2],
                name: 'tableOfContents'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'installSteps'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'credits'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'licenses'
            }
        ])
        .then((response) => {
            const contents = generateMarkdown(response);
            writeToFile('newREADME.md', contents);
        }
        );

}

// Function call to initialize app
init();
