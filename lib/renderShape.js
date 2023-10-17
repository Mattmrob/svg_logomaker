const fs = require('fs');

function RenderShape() {};

RenderShape.prototype.render = (shape) => {

    let shapeChoice = "";

    switch (shape.shape) {
        case "Circle":
            shapeChoice = `<circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />`
            break;
        case "Triangle":
            shapeChoice = `<polygon points="150,30 40,130 260,130"  fill="${shape.shapeColor}" />`
            break;
        case "Square":
            shapeChoice = `<rect x="75" y="25" width="150" height="150" fill="${shape.shapeColor}" />`
            break;
    }

    const shapeToRender = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="transparent" />

    ${shapeChoice}

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>

    </svg>`

    fs.writeFile(`./examples/Logo.svg`, shapeToRender, (err) => {
        err ? console.log(err) : console.log('SVG Written')
        })

}

module.exports = RenderShape;