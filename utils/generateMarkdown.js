// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {return `  
    # ${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Contributing

    ${answers.contribution}

    ## License

    ${renderLicenseSection(answers.license)}

    ## Tests

    ${answers.tests}

    ## Questions

    You can also find me on GitHub at [${answers.github}](https://www.github.com/${answers.github}).

    If you have any questions, please contact me at ${answers.email}.
`;}

export default generateMarkdown;