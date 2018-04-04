const lodashFind = require('lodash.find')
const chalk = require('chalk')
const cliHighlight = require('cli-highlight')
const highlight = cliHighlight.highlight
const safeStringify = require('fast-safe-stringify')

module.exports = (array, itemsToBeTested) => {
  itemsToBeTested.forEach((item, index) => {
    if (!lodashFind(array, item)) {
      console.log(
        'tested array: \n',
        highlight(safeStringify(array, null, 2), {
          language: 'json'
        })
      )
      console.log(
        chalk.red('non matching item: \n'),
        highlight(safeStringify(item, null, 2), {
          language: 'json'
        })
      )

      throw new Error(
        `item with index ${index} was not matched in the tested array`
      )
    }
  })
}
