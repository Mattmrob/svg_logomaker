const inquirer = require('inquirer');
const Shapes = require("./lib/shapes.js");
// Shapes includes Circle, Square, and Triangle
const RenderShape = require("./lib/renderShape.js")
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

    let shapeChoice = ""
    let insertShape = ""

    switch (res.shape) {
        case "Circle":
            insertShape = `<circle cx="150" cy="100" r="80" fill="${res.shapeColor}" />`
            shapeChoice = new Shapes.Circle(res.text, res.textColor, res.shape, res.shapeColor)
            break;
        case "Triangle":
            insertShape = `<polygon points="150,30 40,130 260,130"  fill="${res.shapeColor}" />`
            shapeChoice = new Shapes.Triangle(res.text, res.textColor, res.shape, res.shapeColor)
            break;
        case "Square":
            insertShape = `<rect x="75" y="25" width="150" height="150" fill="${res.shapeColor}" />`
            shapeChoice = new Shapes.Square(res.text, res.textColor, res.shape, res.shapeColor)
            break;
    }

    shapeChoice.render(insertShape);

    // const renderShape = new RenderShape();
    // renderShape.render(res);

    // const shape = new Shapes(res.text, res.textColor, res.shape, res.shapeColor)

    // console.log(shape);

    })

}

init();