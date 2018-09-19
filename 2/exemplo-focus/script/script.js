// 1 - Pegar todos os inputs

const inputName = document.getElementById("cadastroInputNome")
const inputEmail = document.getElementById("cadastroInputEmail")
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const inputPassword = document.getElementById("cadastroInputPassword")
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const inputPhone = document.getElementById("cadastroInputPhone")
const inputArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementsByName("level")
const button = document.querySelector(".cadastro__button")
const inputJunior = document.getElementById("cadastroInputLevelJunior")
const inputPleno = document.getElementById("cadastroInputLevelPleno")
const inputSenior = document.getElementById("cadastroInputLevelSenior")
const checkbox = document.getElementById("cadastroInputNews")

// Não permitir que a confirmação de e-mail e senha sejam coladas 

inputEmailConfirm.addEventListener("paste", function(event) {
    event.preventDefault()
    return false
})

inputPasswordConfirm.addEventListener("paste", function(){
    event.preventDefault()
    return false
})

// O fundo muda de cor de acordo com a área

inputArea.addEventListener("change", function(event){
    event.preventDefault()

    if (inputArea.selectedIndex === 0){
        document.querySelector(".wrapper").style.backgroundColor = '#ADD8E6'
    }
    else if (inputArea.selectedIndex === 1){
        document.querySelector(".wrapper").style.backgroundColor = '#98FB98'
    }
    else if (inputArea.selectedIndex === 2){
        document.querySelector(".wrapper").style.backgroundColor = '#FFC0CB'
    }
    else if (inputArea.selectedIndex === 3){
        document.querySelector(".wrapper").style.backgroundColor = '#F0E68C'
    }
})

button.addEventListener("click", function(event) {
    event.preventDefault()

    list = [inputName, inputEmail, inputEmailConfirm, inputPassword, inputPasswordConfirm, inputPhone]

// Verificar se os inputs estão vazios, ou undefineds

    for(const item in list) {
        if (list[item].value === undefined || list[item].value === null || list[item].value === "" || list[item].value === " ") {
            list[item].focus()
            return false
        }
    }

// Verificar se os emails são os mesmos

    if (inputEmail.value !== inputEmailConfirm.value) {
        alert("Oi, os e-mail devem ser os mesmos!")
        inputEmailConfirm.focus()
        return false
    }

// Verificar se a senha é a mesma

    else if (inputPassword.value !== inputPasswordConfirm.value) {
        alert("Oi, as senhas não conferem!")
        inputPasswordConfirm.focus()
        return false
    }

// Senha tem que ter mais que 7 digitos

    else if (inputPassword.value.length <= 7) {
        alert("Oi, sua senha deve ter mais que 7 dígitos")
        inputPassword.focus()
        return false
    } 

    else if (inputPhone.value.length < 10 || inputPhone.value.length > 11) {
        alert("Número de telefone inválido")
        inputPhone.focus()
        return false
    }

// dependando do nível escreve no console

    let radioItem
    for (let i=0; i < inputLevel.length; i++) {
        if (inputLevel[i].checked) {
            radioItem = inputLevel[i]
        }
    }

    if (radioItem.value === "Junior") {
        console.log(`0 - 2 anos de experiência`)
    }
    else if (radioItem.value === "Pleno") {
        console.log(`2 - 5 anos de experiência`)
    }
    else if (radioItem.value === "Senior") {
        console.log(`5+ anos de experiência`)
    }

// Se news não estiver checkado exibir um alerta

    if (!checkbox.checked) {
        alert(`É uma pena que você não deseja receber nosso conteúdo exclusivo :c`)
    }
    
    document.querySelector("body").style.backgroundColor = "#fff"
    const form = this.closest("form")
    alert("ok")
    form.submit()
}) 



