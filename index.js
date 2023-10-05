// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "Type your project title",
    "Add a description",
    "How would you test this?",
    "What are the installation steps?",
    "What is the usage?",
    "Any credits?",
    "Pick a license",
    "What is your github username?",
    "What is your email?"
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
                type: 'input',
                message: questions[2],
                name: 'test'
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
                type: 'list',
                message: questions[6],
                choices: ['none', 'Apache License 2.0','GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License',
                          'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
                          'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
                          'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'
                         ],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
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
