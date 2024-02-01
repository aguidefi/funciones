const ele = document.getElementById("ele1")

const pintar = function (event, color) {
  event.target.style.backgroundColor = color
}

ele.addEventListener("click", function(event) {
  pintar(event, 'yellow')
})

