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
    return  `https://opensource.org/licenses/${license}`;
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return  `LICENSE INFO`;
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}
 
  ## LICENSE LINK:
  ### ${renderLicenseLink(data.license)};

  ## LICENSE INFORMATION: 
  ### ${renderLicenseSection(data.license)}

  ## THIS IS MY EMAIL:
  ### ${data.email}

  ## THIS IS MY GITHUB USERNAME:
  ### ${data.username}

  ## DESCRIPTION OF MY APPLICATION:
  ### ${data.description}



  
  
  

`;
}

module.exports = generateMarkdown;
