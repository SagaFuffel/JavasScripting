'use strict'

document.getElementById("start").addEventListener("click", () => {
  const numero1 = parseInt(document.getElementById("num1").value)
  const numero2 = parseInt(document.getElementById("num2").value)

  const operation = document.getElementById("operation").value
  const end_result = document.getElementById("result")

  let result;

  if (operation === "add") {
  result = numero1 + numero2;
} else if (operation === "sub") {
  result = numero1 - numero2;
} else if (operation === "multi") {
  result = numero1 * numero2;
} else if (operation === "div") {
  result = numero1 / numero2;
} else {
  result = "Unknown operation";
}
  end_result.textContent = `Result: ${result}`;
})


