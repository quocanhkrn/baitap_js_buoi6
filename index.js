// EX01
let result = document.getElementById("ex01Result")
let sum = 0
let i = 0
while (sum < 10000) {
  i++
  sum += i
}
result.innerHTML += i

// EX02
function ex02() {
  let X = parseInt(document.getElementById("baseX").value)
  let N = parseInt(document.getElementById("exponentN").value)
  let result = document.getElementById("ex02Result")
  let S = 0
  for (let i = 1; i <= N; i++) {
    S += X ** i
  }
  result.classList.add("alert")
  result.innerHTML = `${S}`
}

// EX03
function ex03() {
  let N = parseInt(document.getElementById("N").value)
  let result = document.getElementById("ex03Result")
  let F = 1
  for (let i = 1; i <= N; i++) {
    F *= i
  }
  result.classList.add("alert")
  result.innerHTML = `${F}`
}

// EX04
function ex04() {
  let result = document.getElementById("ex04Result")
  for (let i = 1; i <= 10; i++) {
    let oddEven = ""
    let newElement = document.createElement("p")
    if (i % 2 === 0) {
      oddEven = "chẵn"
      newElement.style.backgroundColor = "#DC3545"
    } else {
      oddEven = "lẻ"
      newElement.style.backgroundColor = "#007BFF"
    }
    newElement.style.padding = "10px"
    newElement.style.color = "white"
    newElement.style.lineHeight = "2"
    newElement.innerHTML = `Dòng ${i} ${oddEven}`
    result.appendChild(newElement)
  }
}