// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
var renderLicenseBadge = license => {
  return '';
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
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);

  return `
# ${data.title}

## Description 
## Table of Contents
## Installation
## Usage
## Credits
## License ${license}
## Tests
`;
}

module.exports = generateMarkdown;
