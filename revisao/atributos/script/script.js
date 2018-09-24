const button = document.querySelector(".article__button")
const ancora = document.getElementById("externo")
const div = document.querySelector(".teste")

button.addEventListener("click", function(e){
  e.preventDefault()

  let atributos = ancora.attributes
  let lista = document.createElement("ul")
  
  for(let i=0; i<atributos.length; i++) {
    let linha = document.createElement("li")
    linha.innerHTML = (`${atributos[i].name}: ${atributos[i].value}`)
    lista.appendChild(linha)
  }
  
  div.appendChild(lista)
})