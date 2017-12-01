const fs = require('fs')

const captcha = fs.readFileSync(`${__dirname}/input`, 'utf8').split('').map(Number)

let sum1 = captcha.reduce((sum, number, index, arr) => {
  const next = arr[(index + 1 ) % arr.length]
  return next === number ? sum + number : sum
}, 0)

let sum2 = captcha.reduce((sum, number, index, arr) => {
  const next =  arr[(index + captcha.length / 2) % arr.length]
  return next === number ? sum + number : sum
}, 0)
 
console.log(sum1, sum2)
