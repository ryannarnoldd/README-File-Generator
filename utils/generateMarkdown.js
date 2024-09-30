// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "N/A") return "";
    else return `![Github License](https://img.shields.io/badge/license-${license}-green)`
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;

    // select correct license link for the selected license
    switch(license) {
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "GPL":
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      case "Apache":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
        break;
      default:
        licenseLink = "";
        break;
    }
    
    return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "N/A") return "";
    else return `##Section\n\nThe license used is ${license}. Here is the link to get detailed information for this license: [${license}](${renderLicenseLink(license)})`;
}

// Create a function to generate markdown for README
// License will remain empty if there is no license.
function generateMarkdown(answers) {
return `# ${answers.title} 
${renderLicenseBadge(answers.license)}

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

${renderLicenseSection(answers.license)}

## Tests

${answers.tests}

## Questions

You can also find me on GitHub at [${answers.github}](https://www.github.com/${answers.github}).

If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}).`;
}

export default generateMarkdown;