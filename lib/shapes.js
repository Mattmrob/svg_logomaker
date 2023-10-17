fs = require('fs');

class Shapes {
    constructor(text, textColor, shape, shapeColor, insertShape) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.insertShape = insertShape;
    }

    render() {
    
        const shapeToRender = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="100%" height="100%" fill="transparent" />
    
        ${this.insertShape}
    
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`;

        fs.writeFile(`./Logo.svg`, shapeToRender, (err) => {
            err ? console.log(err) : console.log('SVG Written')
            })
    }

}

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor, insertShape = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`) {
        super(text, textColor, shape, shapeColor);

    this.insertShape = insertShape;

    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor, insertShape = `<polygon points="150,30 40,130 260,130"  fill="${shapeColor}" />`) {
        super(text, textColor, shape, shapeColor);

    this.insertShape = insertShape;

    }
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor, insertShape = `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`) {
        super(text, textColor, shape, shapeColor);

    this.insertShape = insertShape;

    }
}


module.exports = { Circle, Triangle, Square };