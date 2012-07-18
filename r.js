var fs = require('fs')
var P = require('./p.js')
var p = new P()

fs.createReadStream('./log.txt').pipe(p)

p.on('data', function (c) {
  console.log(c)
})

p.on('end', function (c) {
  console.log('end')
})

