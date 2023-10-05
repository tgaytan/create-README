const { makeBadge, ValidationError } = require('badge-maker')

var renderLicenseBadge = license => {
  
  if (license === 'none') {
    return '';
  }
  
  const format = {
    label: 'License',
    message: license,
    color: 'green'
  };

  const svg = makeBadge(format);
  
  return svg;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
var renderLicenseLink = license => {
  if (license === 'none') {
    return '';
  }
  return '- [License](#license)';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
var renderLicenseSection = license => {
  if (license === 'none') {
    return '';
  }
  
  return `
## License

${license}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `
${badge}

# ${data.title}

## Description 

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${link}

## Installation

${data.installSteps}

## Usage

${data.usage}

## Contributing

${data.credits}

## Tests

${data.test}

## Questions

If you have additional questions, here is my contact information.

Github: ${data.github} 

Email: ${data.email}

${licenseSection}
`;
}

module.exports = generateMarkdown;
