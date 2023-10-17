const fs = require('fs');

function RenderShape() {};

RenderShape.prototype.render = (shape) => {

    let shapeChoice = "";

    switch (shape.shape) {
        case "Circle":
            shapeChoice = `<circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />`
            break;
        case "Triangle":
            shapeChoice = `<polygon points="100, 100 150, 150 50, 50 100, 100"  fill="${shape.shapeColor}" />`
            break;
        case "Square":
            shapeChoice = `<rect x="0" y="0" width="100" height="100" fill="${shape.shapeColor}" />`
            break;
    }

    const shapeToRender = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="white" />

    ${shapeChoice}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="{${shape.textColor}}">${shape.text}</text>

    </svg>`

    console.log(shapeToRender);

}

module.exports = RenderShape;