const container1 = document.querySelector ("#container_1");
const container2 = document.querySelector ("#container_2");
const container3 = document.querySelector ("#container_3");
const container4 = document.querySelector ("#container_4");
const containerKey = document.querySelector("#key")

const cambiarNegro = function (e) {
  e.target.style.backgroundColor = 'black';
}

container1.addEventListener("click", cambiarNegro);
container2.addEventListener("click", cambiarNegro);
container3.addEventListener("click", cambiarNegro);
container4.addEventListener("click", cambiarNegro);

document.addEventListener("keydown", (e) => {
  let letra = e.key
  if (letra == 'a') {
    containerKey.style.backgroundColor = 'pink'
  }else if (letra == 's') {
    containerKey.style.backgroundColor = 'orange'
  }else if (letra == 'd') {
    containerKey.style.backgroundColor = 'aqua'
  }else if (letra == 'q') {
    agregarElemento('purple')
  }else if (letra == 'w') {
    agregarElemento('gray')
  }else if (letra == 'e')
    agregarElemento('brown')
})

function agregarElemento (color){
  let div = document.createElement('div')
  div.style.width = '200px'
  div.style.height = '200px'
  div.style.border = '1px black solid'
  div.style.backgroundColor = color
  key.appendChild(div)
}

