'use strict'

try {
  throw new Error('An error occurred.')
} catch { // The `catch` parameter and parentheses are optional now.
  console.log('Acknowledged.')
}
