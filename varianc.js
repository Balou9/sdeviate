function sum (arr) {
  var result = 0
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

function average (arr) {
  var out = sum(arr) / arr.length
  return out
}

function varianC (arr) {
  var vari = sum(arr.map(function (each) {
    return Math.pow(each - average(arr), 2)
  })) / arr.length
  return vari
}

module.exports = varianC
