const { makeBadge, ValidationError } = require('badge-maker')

var renderLicenseBadge = license => {
  const format = {
    label: 'License',
    message: license,
    color: 'green'
  };

  const svg = makeBadge(format);
  
  return svg ? svg : '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
var renderLicenseLink = license => {
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
var renderLicenseSection = license => {
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const badge = renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);

  return `
${badge}

# ${data.title}

## Description 

${data.description}

## Installation

${data.installSteps}

## Usage

${data.usage}

## Contributing

${data.credits}

## Tests

${data.test}
`;
}

module.exports = generateMarkdown;



// ## Table of Contents

// ## Installation

// ${data.installSteps}

// ## Usage

// ${data.usage}

// ## Contributing
// ## License ${data.license}
// ## Tests