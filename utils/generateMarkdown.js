//License badge
function renderLicenseBadge(license) {
    if (license === "Apache") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Mozilla") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (license === "None") {
        return ``
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Testing Instructions](#tests)
6. [License](#license)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
This app is licensed under ${data.license}
## Questions
See me at https://github.com/MorganWoods618 or email MorganWoods618@gmail.com for any questions. 
`;
}

module.exports = generateMarkdown;
