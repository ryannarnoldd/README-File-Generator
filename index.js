// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}.md`)
      );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README', 'Hello World');
}

// Function call to initialize app
init();