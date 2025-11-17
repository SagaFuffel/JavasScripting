/*
Write a program that asks the user for numbers until the user gives zero.
The given numbers are printed in the console from the largest to the smallest.
(2p)
 */

function give_zero() {

  list = []
  while (true) {
    numero = parseFloat(prompt("Give me a list of numbers, stop with a 0: "))

    if ((numero < 0)|| numero > 0) {
      list.push(numero)
    }
    else if (numero === 0) {
      break
    }
    else alert("Give a valid number!")
  }

  list.sort(function(a, b){return a - b})
  list.reverse()
  for (let item of list) {
    console.log(item)
  }
}

window.onload  = give_zero
