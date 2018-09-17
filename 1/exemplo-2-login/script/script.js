const login = document.querySelector(".login__button")

// login.addEventListener("click", function(event){
//     event.preventDefault()
//     const email = document.querySelector(".login__input").value
//     const loginForm = document.querySelector(".login__form")
//     loginForm.innerHTML = (`<h2>Login com email ${email} efetuado!</h2>`)
//     // alert(`Login com email ${email} efetuado!`)
//     const mensagem = document.querySelector(".login__subtitle")
//     mensagem.innerHTML = ""
// })

login.addEventListener("click", function(event){
    event.preventDefault()

    const resposta = document.createElement(`span`)
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso")

    resposta.appendChild(respostaMensagem)

    const newsForm = document.querySelector(".login__form")

    newsForm.insertBefore(resposta, newsForm.childNodes[0])
})