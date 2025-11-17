/*
Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document.

Example output HTML code:
<ul>
   <li>1992</li>
   <li>1996</li>
   <li>2000</li>
   <li>2004</li>
   <li>2008</li>
</ul>

(3p)
 */

// needs a range
// year1 and year2
// check if start year bigger than end year!!


function leap() {
  const year1 = parseInt(prompt("Start year: "))
  const year2 = parseInt(prompt("End year: "))

  const result = []
  for (let i = year1; i <= year2; i++) {
    if ((i % 100 === 0 && i % 400 === 0) || i % 4 && i % 100 !== 0) {
      result.push(i)
    }
  }
  console.log(result)


  const end = result
  document.getElementById("text").innerHTML=end
}
window.onload = leap


