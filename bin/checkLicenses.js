#! /usr/bin/env node
const shell = require('shelljs')

// TODO - we should allow for adding more licenses here, in case we have a project that isnt MIT? Or perhaps we should do it as presets for the target usage license

const res = shell.exec('license-checker --onlyAllow "MIT;BSD;ISC;Apache-2.0;CC0;CC-BY-3.0"')
process.exit(res.code)
