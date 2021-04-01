// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of you project'
    },

    // {
    //     type: 'list',
    //     message: 'What kind of license should your project have?',
    //     name: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
    // },

    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },

    {
        type: 'input',
        name: 'runTests',
        message: 'What command should be run to run tests?'
    },

    {
        type: 'input',
        name: 'usingRepo',
        message: 'What does the user need to know aobut using the repo?'
    },

    {
        type: 'input',
        name: 'contributeRepo',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("READMEtest.md", test)
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
    })
}

// Function call to initialize app
init();
