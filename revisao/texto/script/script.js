const botaoAumentar = document.getElementById("botaoAumentar")
const botaoDiminuir = document.getElementById("botaoDiminuir")
const texto = document.querySelector(".conteudo")
let fonte = 16

botaoAumentar.addEventListener("click", function(e){
  e.preventDefault()
  fonte += 1
  console.log(fonte)
  texto.style.fontSize = `${fonte}px`
})

botaoDiminuir.addEventListener("click", function(e){
  e.preventDefault()
  fonte -= 1
  texto.style.fontSize = `${fonte}px`
})