const inquirer = require('inquirer');
const Shapes = require("./lib/shapes");
const fs = require('fs');


const init = () => {

inquirer.prompt([

    {
        type: 'input',
        name: "text",
        message: "Please enter up to three characters for your logo",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be?",
    },
    {
        type: 'list',
        name: 'shape',
        message: "What shape would you like your logo's background to be?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: 'What color would you like the background shape to be?',
    },
]).then(res => {

    const shape = new Shapes(res.text, res.textColor, res.shape, res.shapeColor)

    console.log(shape);

    })

}

init();