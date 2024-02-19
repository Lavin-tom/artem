# Artem-Halftone Portrait Creator

This repository contains a web application for creating SVG halftone patterns from raster images. The application allows users to upload an image file (PNG, JPEG, or GIF) and customize various parameters to generate halftone patterns in SVG format.

## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Customize the following parameters:
   - Input file: Choose the image file you want to convert to a halftone pattern.
   - Output width: Set the desired width of the output SVG file.
   - Spacing: Adjust the spacing between halftone dots.
   - Shape: Select the shape of halftone dots (Default, Circle, Hex, Diamond).
   - Grid: Choose the grid type (Default, Rect, Hex, Diamond, Poisson).
   - Grid Line: Toggle grid lines on/off.
   - Line: Toggle line effect on/off.
   - Diagonal: Toggle diagonal effect on/off.
   - Radial: Toggle radial effect on/off.
   - Invert image: Invert the colors of the input image.
   - Output cutting paths only: Generate cutting paths only without halftone dots.
4. Click the "Download SVG" button to download the generated SVG file.

## Credits

This project is copied from Erik Vesteraas's work. The original project can be found [here](http://vestera.as). 

## Repository Contents

- `index.html`: Main HTML file containing the structure and interface of the web application.
- `styles.css`: CSS file for styling the web application.
- `scripts/bundle.js`: JavaScript bundle file for handling the application logic.
- `scripts/script.js`: Additional JavaScript file for script logic.
- `LICENSE`: License information for the project.
- `README.md`: Readme file providing instructions and information about the project.
