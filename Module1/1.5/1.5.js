/*
Write a program that asks the user to enter a year and notifies the user
whether the input year is a leap year. A year is a leap year if it is divisible by four.
However, years divisible by 100 are leap years only if they are also divisible by 400.
Print the result on the HTML document.
(3p)
*/

function calculation() {

  const year = prompt("Let's see if it's a leap year. \nYear: ")

  let answer = ""

  if (year % 100 === 0 && year % 400 === 0) {
    answer = "a leap year." }
  else if (year % 4 && year % 100 !== 0) {
    answer = "a leap year." }
  else {
    answer = "not a leap year." }


  const result = year + ' is ' + answer
  document.getElementById("text").innerText=result
}
window.onload = calculation