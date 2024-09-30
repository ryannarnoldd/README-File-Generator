// Include packages needed for this application.
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Creates an array of questions for user input.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions and examples for usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are included in the project?'
    },
    {   
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "N/A"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// Create a function to write README file using fs.
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}.md`)
      );
}

// Create a function to initialize app.
function init() {

    // Prompt the user with questions and calls the writeToFile function.
    // It will pass through the answers to the generateMarkdown function from generateMarkdown.js.
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README', generateMarkdown(answers));
    });
}

// Function call to initialize app.
init();