// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license !== 'None'){
    return  `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }

  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return  `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  THIS IS OUR FILE WITH SOME INFO
  # ${data.title}

  THIS IS MY EMAIL
  ##${data.email}

  DESCRIPTION OF REPO
  ##${data.description}


  ${renderLicenseBadge(data.license)};
  ${renderLicenseLink(data.license)};
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
