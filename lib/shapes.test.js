const Shapes = require("./shapes.js");

describe('Shapes', () => {

    describe('Circle', () => {
        it('should render a circle with a filled green color and white text spelling "Tex" inside', () => {

            const circle = new Shapes.Circle("Tex", "white", "Circle", "green", insertShape = `<polygon points="150,30 40,130 260,130"  fill="green" />`);

            expect(circle.render(this.insertShape)).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
            <rect width="100%" height="100%" fill="transparent" />
        
            <circle cx="150" cy="100" r="80" fill="green" />
        
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">Tex</text>
        
            </svg>` 
            )
        })
        })

        describe('Triangle', () => {
            it('should render a triangle with a filled red color and blue text spelling "gam" inside', () => {
    
                const circle = new Shapes.Circle("gam", "blue", "Triangle", "red");
    
                expect(circle.render(circle.insertShape)).toEqual(`<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
            
                <rect width="100%" height="100%" fill="transparent" />
            
                <polygon points="150,30 40,130 260,130"  fill="red" />
            
                <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">gam</text>
            
                </svg>` 
                )
            })
            })

            describe('Square', () => {
                it('should render a square with a filled green color and white text inside', () => {
        
                    const circle = new Shapes.Circle("Tex", "white", "Circle", "green");
        
                    expect(circle.render(circle.insertShape)).toEqual(`<svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                
                    <rect width="100%" height="100%" fill="transparent" />
                
                    <rect x="75" y="25" width="150" height="150" fill="green" />
                
                    <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">Tex</text>
                
                    </svg>` 
                    )
                })
                })


    })