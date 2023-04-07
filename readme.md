
# Fontmin

This is a working demo of the Fontmin tool desgined to run locally as one-offs. 

## Source:
https://github.com/ecomfe/fontmin

## Install 
`npm install`

## Build

Add your TTF font files into a `fonts` folder, change the 'glyphs' veriable
in the `main.js` to the given characters you want in the font files. 

Then run this:

`npm build`

Your optmised font files will render in the `build` folder. 

To keep all the common accii glyhps (along with some other special characters), just
use the 'common' variable. Typically, this will reduce the font filesie by about 90%.  

The build method will also convert the ttf to eot, woff2, and woff formats too.

## Usecase

You can use your optomised font file, [base64](https://www.giftofspeed.com/base64-encoder/) it
and define a local @font-face for SVG content:

```
<svg class="logo" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" xml:space="preserve" viewBox="0 0 500 500">
  
  <title>Official Logo</title>

  <text id="icon-text" x="50%" y="50%" style="font-family:'Logo Font', 'Trebuchet MS'; font-size:100px; text-anchor: middle;">Company Name</text>

  <style type="text/css">
    @font-face {
      font-family: 'Logo Font';
      font-style: normal;
      font-weight: bold;
      font-display: swap;
      src: url(data:application/font-woff;charset=utf-8;base64,PLACE_BASE64_STRING_HERE) format('woff2');
    }
  </style>
  
</svg>

```