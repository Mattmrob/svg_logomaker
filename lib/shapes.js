fs = require('fs');

class Shapes {
    constructor(text, textColor, shape, shapeColor, insert) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.insert = insert;
    }

    render(insert) {
    
        const shapeToRender = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect width="100%" height="100%" fill="transparent" />
    
        ${insert}
    
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`
    
        fs.writeFile(`./examples/Logo.svg`, shapeToRender, (err) => {
            err ? console.log(err) : console.log('SVG Written')
            })
    
    }

}

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor, insert) {
        super(text, textColor, shape, shapeColor, insert);
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor, insert) {
        super(text, textColor, shape, shapeColor, insert);
    }
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor, insert) {
        super(text, textColor, shape, shapeColor, insert);
    }
}


module.exports = { Circle, Triangle, Square };