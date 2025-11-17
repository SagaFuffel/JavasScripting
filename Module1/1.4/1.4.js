/*
In the Harry Potter children's books,
the sorting hat assigns a new student at Hogwarts School of Witchcraft and
Wizardry to one of the four classes, which are
Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.

Write an electronic sorting hat that asks for a student's name and
draws a room for that student. If you enter Anna as the name,
for example, the program prints to the HTML document
"Anna, you are Ravenclaw."

Use math.random() to draw a value (1, 2, 3 or 4)
Once the number is drawn, you need to use a multiple choice structure
(if, else if, ..., else or switch).

(3p)
 */

function myF() {

  const name = prompt('Name: ')

  let house = ""
  while (house < 10) {
    let number = Math.random()
    if (number <= 0.25)
      house = "Ravenclaw"
    else if (number > 0.25 && number <= 0.5)
      house = "Hufflepuff"
    else if (number > 0.5 && number <= 0.85)
      house = "Slytherin"
    else house = "Gryffindor"
  }

  const final = name + ', you are ' + house
  document.getElementById("text").innerText=final
}
window.onload = myF


















