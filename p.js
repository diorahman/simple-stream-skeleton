var Stream = require('stream')
module.exports = Parser

function Parser () {
  Stream.call(this)
  this.readable = true
  this.writable = true
}

Parser.prototype = Object.create(Stream.prototype, {
  constructor: { value: Parser, enumerable: false }
})

Parser.prototype.write = function (chunk) {
	this.emit('data', chunk.toString())
}

Parser.prototype.end = function () {
	this.emit('end')
}

Parser.prototype.pause = function () {
}

Parser.prototype.resume = function () {
}