'use strict'

const globalSymbol = Symbol.for('Global Symbol')
const localSymbol = Symbol('Local Symbol')

console.log(globalSymbol.description) // Global Symbol.
console.log(localSymbol.description) // Local Symbol.
