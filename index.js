var varianC = require('varianc')

function sdeviate (arr) {
  return Math.sqrt(varianC(arr))
}

module.exports = sdeviate
