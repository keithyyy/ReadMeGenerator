// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/${data.Username}/${data.Title})

# Description

${data.Description}

# Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

# Installation
These are the instructions for how and what's to be installed for this project: ${data.Installation}

# Usage
​This project is designed to be used for ${data.Usage}

# License
This project is under the ${data.License} license.

# Contributing
​Contributors: ${data.Contribution}

# Tests
To run any tests, this is the guide on how to do so: ${data.Testing}

# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly - ${data.Email}.

`;
}

module.exports = generateMarkdown;
