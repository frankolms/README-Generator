// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(typeof license);
  console.log(license[0]);
  if (license[0] === "MIT License") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license[0] === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license[0] === "GNU General Public License v3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license[0] === "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license[0] === "MIT License") {
    licenseLink = "https://opensource.org/licenses/MIT";
    return licenseLink;
  } else if (license[0] === "Apache License 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
    return licenseLink;
  } else if (license[0] === "GNU General Public License v3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
    return licenseLink;
  } else if (license[0] === "Mozilla Public License 2.0") {
    licenseLink = "https://opensource.org/licenses/MPL-2.0";
    return licenseLink;
  } else {
    licenseLink = "";
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0]) {
    return `## License
    ${license[0]}:
    ${renderLicenseLink(license)}

  `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions, you can reach me at:

  GitHub: [${data.github}](https://github.com/${data.github})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
