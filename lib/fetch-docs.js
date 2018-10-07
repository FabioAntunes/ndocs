const https = require('https')
const unzip = require('./unzip-docs')

function fetchDocs(callback) {
  const filename = `node-${process.version}`
  https
    .get(
      `https://nodejs.org/dist/${process.version}/${filename}.tar.gz`,
      response => {
        unzip(response, filename).on('finish', () => {
          if (callback) {
            callback(null)
          }
        })
      }
    )
    .on('error', err => {
      console.log('Error: ' + err.message)
      process.exit(1)
    })
}
module.exports = fetchDocs
