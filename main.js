var Fontmin = require('fontmin');

const common = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}€‚„…ˆ‹Œ‘’“”•–—˜™›œ¢£¥¦§©«­®°²³´µ¶·¸¹»¿éó÷"
const glyphs = common // 'HELLO WORLD'

var fontmin = new Fontmin()
    .src('fonts/*.ttf')
    .dest('build/')
    .use(Fontmin.glyph({ text: glyphs, hinting: false }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff2())
    .use(Fontmin.ttf2woff({
      deflate: true           // deflate woff. default = false
    }))

fontmin.run(function (err, files) {
  if (err) { throw err; }
  console.log(files[0]);
});


