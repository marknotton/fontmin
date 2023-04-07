
## Source:
https://github.com/ecomfe/fontmin

## Install 
`npm install`

## Build

Add your TTF font files into the 'fonts' directory, change the 'glyphs' veriable
in the `main.js` to only the given characters you want in the font files. 

Then run this:

`npm build`

Your optmised font files will render in the `build` folder. 

To keep all the common accii glyhps (along with some other special characters), just
you the 'common' variable. Typically, this will reduce the font filesie by about 90%.  

The build method will also convert the ttf to eot, woff2, and woff formats too.