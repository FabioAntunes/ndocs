const fs = require('fs')
const path = require('path')

function readFile(filename, shouldReturnPath) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      process.exit(1)
    }
    if (shouldReturnPath) {
      console.log(path.resolve(filename))
      return
    }
    console.log(data)
  })
}

module.exports = readFile
