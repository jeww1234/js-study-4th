import './style.css'
const textBox = document.getElementById("textbox")



const swap = (a, b) =>{
  
  console.log("a : ", a, "b :", b)
  textBox.innerHTML += `바꾸기 전 a = ${a} b = ${b}<br>`
  let temp = 0
  temp = a
  a = b
  b = temp
  console.log("a : ", a, "b :", b)

  textBox.innerHTML += `바꾼 후 a = ${a} b = ${b}`
}

swap(30, 50)



// 20 + 30
// "20" + "30"
// "Hello" + " " + 2021
// 1 + 2 * 3
// (1 + 3) ** 2
// 1 / 0
// 6 % 2
// 7.5 % 2
// 5 == 5
// 5 === 5
// 5 == "5"
// 5 === "5"
// 5 != 5.0
// 5 !== 5.0
// "true" === true
// 5 <= 5.0
// 5 >= 5
// true || true
// true || false
// true && true
// true && false
// !true
// !false

document.querySelectorAll("#predict p").forEach(p =>{
  const exp = p.dataset.exp
  let result

  try{
    result = new Function(`return ${exp}`)()
  } catch (e){
    result = 'Error'
  }
  const resultP = document.createElement('p')
  resultP.textContent = `${exp} = ${result}`
  document.querySelector("#result").appendChild(resultP)
})