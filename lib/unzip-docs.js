const tar = require('tar')
const path = require('path')

function unzipDocs(stream, filename) {
  return stream
    .pipe(tar.x({ cwd: path.resolve(__dirname, '../') }, [`${filename}/lib/`]))
    .on('error', console.log)
}

module.exports = unzipDocs
