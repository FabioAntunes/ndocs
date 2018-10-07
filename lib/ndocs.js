const fs = require('fs')
const path = require('path')
const fetchDocs = require('./fetch-docs')
const readFile = require('./read-file')

function ndocs(moduleName, shouldReturnPath) {
  const dir = path.resolve(__dirname, `../node-${process.version}/lib/`)
  const filename = `${moduleName}.js`
  const pathname = `${dir}/${filename}`

  fs.readdir(dir, (err, files) => {
    if (err || files.length === 0) {
      fetchDocs(() => {
        readFile(pathname, shouldReturnPath)
      })
    } else {
      readFile(pathname, shouldReturnPath)
    }
  })
}

module.exports = ndocs
