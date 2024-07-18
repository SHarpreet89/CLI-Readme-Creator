// Function that returns a license badge based on which license is passed in if there is no license it will return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link if there is no license it will return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `* [License](#license)`;
}

// Function that returns the license section of README If there is no license it will return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README, if any item is not typed in by user, that field is omitted from the Readme.
function generateMarkdown(data) {
  let markdown = `# ${data.title}

${renderLicenseBadge(data.license)}
`;

  if (data.description) {
    markdown += `
## Description
${data.description}
`;
  }

  // Table of Contents
  let tableOfContents = `
## Table of Contents
`;
  if (data.installation) tableOfContents += `* [Installation](#installation)\n`;
  if (data.usage) tableOfContents += `* [Usage](#usage)\n`;
  if (data.contributing) tableOfContents += `* [Contributing](#contributing)\n`;
  if (data.tests) tableOfContents += `* [Tests](#tests)\n`;
  if (data.license) tableOfContents += `* [License](#license)\n`;
  if (data.github || data.email) tableOfContents += `* [Questions](#questions)\n`;

  markdown += tableOfContents;

  if (data.installation) {
    markdown += `
## Installation
${data.installation}
`;
  }

  if (data.usage) {
    markdown += `
## Usage
${data.usage}
`;
  }

  if (data.contributing) {
    markdown += `
## Contributing
${data.contributing}
`;
  }

  if (data.tests) {
    markdown += `
## Tests
${data.tests}
`;
  }

  if (data.license) {
    markdown += `
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
  }

  if (data.github || data.email) {
    markdown += `
## Questions
`;
    if (data.github) {
      markdown += `* [GitHub](https://github.com/${data.github})\n`;
    }
    if (data.email) {
      markdown += `* Email: ${data.email}\n`;
    }
  }

  return markdown;
}

module.exports = generateMarkdown;