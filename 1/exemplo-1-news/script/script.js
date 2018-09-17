// const texto = document.getElementById("newsInputEmail")
// const botao = document.querySelector(".news__button")
// const texto2 = document.querySelector("#newsInputEmail")
// console.log(texto2.tagName)
// console.log(botao.tagName)
// const titulo = document.getElementById("formTitle")
// console.log(titulo)
// const titulo2 = document.querySelector(".news__title")
// console.log(titulo2)

// const input = document.getElementById("newsInputEmail")
// const botao = document.querySelector(".news__button") 

// botao.addEventListener("click", function(event) {
//     event.preventDefault()
//     const email = input.value
//     const loginForm = document.querySelector(".news__form")
//     loginForm.innerHTML = (`<h2>Login com e-mail ${email} efetuado</h2>`)
// })

const input = document.getElementById("newsInputEmail")
const botao = document.querySelector(".news__button") 

botao.addEventListener("click", function(event) {
    event.preventDefault()

    const resposta = document.createElement("span")
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!")
    resposta.appendChild(respostaMensagem)

    const newsForm = document.querySelector(".news__form")

    newsForm.insertBefore(resposta, newsForm.childNodes[0])
})
