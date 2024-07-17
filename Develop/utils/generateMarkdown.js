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

// Function to generate markdown for README, if any item is not typed in by user, that field is ommited from the Readme.
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

  if (data.credits) {
    markdown += `
## Credits
${data.credits}
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
`;
  }

  return markdown;
}

module.exports = generateMarkdown;