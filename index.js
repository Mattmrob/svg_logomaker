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
        message: "Please enter a color keyword or hexadecimal for your text's color.",
    },
    {
        type: 'list',
        name: 'shape',
        message: "What shape would you like your logo's background to be?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword or hexadecimal for your shape's color.",
    },
]).then(res => {

    if (res.text.length > 3) {
        return console.log("Logo cannot be more than three characters long!")
    } else if (res.text.length === 0) {
        return console.log("You must include at least one character for your logo!")
    }

    const shape = new Shapes(res.text, res.textColor, res.shape, res.shapeColor)

    console.log(shape);

    })

}

init();