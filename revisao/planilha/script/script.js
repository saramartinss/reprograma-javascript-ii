const button = document.querySelector(".feedback__button")
const table = document.querySelector(".respostas__table")
const inputEmpresa = document.getElementById("inputEmpresa")
const inputCidade = document.getElementById("inputCidade")
const inputComent = document.getElementById("inputComentario")

button.addEventListener("click", function(e){
  e.preventDefault()

  const linha = document.createElement("tr")
  const empresa = document.createElement("td")
  const cidade = document.createElement("td")
  const comentario = document.createElement("td")

  empresa.innerHTML = inputEmpresa.value 
  cidade.innerHTML = inputCidade.value
  comentario.innerHTML = inputComent.value

  linha.appendChild(empresa)
  linha.appendChild(cidade)
  linha.appendChild(comentario)
  table.appendChild(linha)
})