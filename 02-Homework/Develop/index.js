// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require(".utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
    ]);
} 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  