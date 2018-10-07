#!/usr/bin/env node

const argv = require('yargs')
  .alias('p', 'path')
  .boolean('p').argv
const ndocs = require('../lib')

if (argv._.length) {
  ndocs(argv._[0], argv.p)
}
