var inquirer = require('inquirer');
var require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            choices: ["phone", "email", "text"],
            name: 'communication',
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });