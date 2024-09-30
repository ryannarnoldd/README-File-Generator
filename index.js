// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// import { generateMarkdown } from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
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
        message: 'Who contributed to this project? How can people contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are included in the project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}.md`)
      );
}

// TODO: Create a function to initialize app
function init() {
    // I need to use inquirer to ask the user the questions from questions[]
    inquirer
    .prompt(
        questions
    )
    .then((answers) => {
        
        fs.writeFile('index.html', answers.title, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

}

// Function call to initialize app
init();