# SIMPLE LOGO GENERATOR

## Description

This project allows users to generate a simple EPS vector logo using Node, fs, and inquirer.

## Installation

Download this repository along with a code editing software such as Visual Studo Code. With your editing software installed, make sure to install Node. Once both Node and a code editing software is installed, open the downloaded copy of this repository and install the needed packages by typing "npm i" in your terminal.

## Usage

<a href="https://drive.google.com/file/d/1tbM4WaE73PuXhcd_FeJoknSZnbUGqAq9/view">Click here for a video on how to use the app!</a>

After installing all required files, while in the copied repository's folder in your code editing software, type "node index.js" to open the index file in Node. The user will then be prompted with a series of questions that must be answered. The user will have to pick what text they want their logo to include (up to 3 characters), what color they want the text to be, pick one of three shapes for the background of their logo, and a color for that shape as well.

Once all questions are answered, a Logo.svg file will be generated in the uppermost root folder (with index.js) based on your specifications.
*IMPORTANT* - If you already have a generated Logo.svg file in that location, it will be overwritten when a new logo is generated, so if you plan on using the program multiple times, make sure to move your logos or change their name before generating a new Logo.svg.

## Credits

UC Berkely resources

## License

MIT License

## Testing

Testing can be done using the Jest plugin, however, I have had no luck running tests with this repository. Please contact me if you know why its not working!