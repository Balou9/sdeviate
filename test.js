var tape = require('tape')
var sdeviate = require('./index')
var varianC = require('varianc')
var arr = [229, 349, 128, 231, 891, 542, 224, 667, 984, 255, 657]

tape('Output is true', function (t) {
  t.ok(sdeviate(arr), 'Should be truthy.'),
  t.end()
})

tape('Squared Standard deviation equals variance', function (t) {
  t.ok(Math.pow(sdeviate(arr), 2) === varianC(arr), 'is true')
  t.end()
})
