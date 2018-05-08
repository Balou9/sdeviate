var varianC = require('./varianc')

function sdeviate (arr) {
  var sd = Math.sqrt(varianC(arr))
  return sd
}

module.exports = sdeviate
