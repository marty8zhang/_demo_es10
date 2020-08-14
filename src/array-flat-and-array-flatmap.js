'use strict'

const anArray = ['lv1', ['lv2', ['lv3', ['lv4']]]]

// `Array.flat()`. The optional `depth` parameter indicates how many levels to be flattened, which defaults to `1`.
console.log(anArray.flat()) // [ 'lv1', 'lv2', [ 'lv3', [ 'lv4' ] ] ].
console.log(anArray.flat(1)) // Same as above.
console.log(anArray.flat(2)) // [ 'lv1', 'lv2', 'lv3', [ 'lv4' ] ].

const anotherArray = ['lv1', ['lv2', ['lv3']]]

function mapIt (item) {
  return Array.isArray(item) ? item : item + '-mapped'
}

// `Array.flatMap()` doesn't have a parameter. Its result array is always flattened 1 level.
// Note: The input array will be mapped first then be flattened.
console.log(anotherArray.map(mapIt)) // [ 'lv1-mapped', [ 'lv2', [ 'lv3' ] ] ].
console.log(anotherArray.flatMap(mapIt)) // [ 'lv1-mapped', 'lv2', [ 'lv3' ] ].
console.log(anotherArray.flat().map(mapIt)) // [ 'lv1-mapped', 'lv2-mapped', [ 'lv3' ] ].
