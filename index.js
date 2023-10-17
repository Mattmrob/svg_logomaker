const inquirer = require('inquirer');
const Shapes = require("./lib/shapes.js");
// Shapes includes Circle, Square, and Triangle
const RenderShape = require("./lib/renderShape.js")
const fs = require('fs');



const init = () => {

    const test = new Shapes.Circle("this", "is", "a", "test")
    console.log(test);

// inquirer.prompt([

//     {
//         type: 'input',
//         name: "text",
//         message: "Please enter up to three characters for your logo",
//     },
//     {
//         type: "input",
//         name: "textColor",
//         message: "Please enter a color keyword or hexadecimal for your text's color.",
//     },
//     {
//         type: 'list',
//         name: 'shape',
//         message: "What shape would you like your logo's background to be?",
//         choices: ["Circle", "Triangle", "Square"]
//     },
//     {
//         type: "input",
//         name: "shapeColor",
//         message: "Please enter a color keyword or hexadecimal for your shape's color.",
//     },
// ]).then(res => {

//     if (res.text.length > 3) {
//         return console.log("Logo cannot be more than three characters long!")
//     } else if (res.text.length === 0) {
//         return console.log("You must include at least one character for your logo!")
//     }

//     const renderShape = new RenderShape();
//     renderShape.render(res);

//     // const shape = new Shapes(res.text, res.textColor, res.shape, res.shapeColor)

//     // console.log(shape);

//     })

}

init();