// 1 - Pegar todos os inputs

const inputName = document.getElementById("cadastroInputNome")
const inputEmail = document.getElementById("cadastroInputEmail")
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const inputPassword = document.getElementById("cadastroInputPassword")
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const inputPhone = document.getElementById("cadastroInputPhone")
const inputArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementById("cadastroInputLevel")
const button = document.querySelector(".cadastro__button")

inputArea.addEventListener("change", function(event){
    event.preventDefault()

    if (inputArea.value === "Front-End"){
        document.querySelector(".wrapper").style.backgroundColor = '#ADD8E6'
    }
    
    else if (inputArea.value === "Back-End"){
        document.querySelector(".wrapper").style.backgroundColor = '#98FB98'
    }
    
    else if (inputArea.value === "UX Designer"){
        document.querySelector(".wrapper").style.backgroundColor = '#FFC0CB'
    }
    
    else if (inputArea.value === "UI Designer"){
        document.querySelector(".wrapper").style.backgroundColor = '#F0E68C'
    }
})

button.addEventListener("click", function(event) {
    event.preventDefault()
    
    // let radioItem
    // for (let i = 0; i < inputLevel.length; i++) {
    //     if (inputLevel[i].checked) {
            
    //     }
    // }

    list = [inputName, inputEmail, inputEmailConfirm, inputPassword, inputPasswordConfirm, inputPhone]

// 2 -  Verificar se os inputs estão vazios, ou undefineds

    for(const item in list) {
        if (list[item].value === undefined || list[item].value === null || list[item].value === "" || list[item].value === " ") {
            list[item].focus()
            return false
        }
    }

// 3 - Verificar se os emails são os mesmos

    if (inputEmail.value !== inputEmailConfirm.value) {
        alert("Oi, os e-mail devem ser os mesmos!")
        inputEmailConfirm.focus()
        return false
    }

// 4 - Verificar se a senha é a mesma

    else if (inputPassword.value !== inputPasswordConfirm.value) {
        alert("Oi, as senhas não conferem!")
        inputPasswordConfirm.focus()
        return false
    }

// 5 - Senha tem que ter mais que 7 digitos

    else if (inputPassword.value.length <= 7) {
        alert("Oi, sua senha deve ter mais que 7 dígitos")
        inputPassword.focus()
        return false
    }

// 6 - O fundo muda de cor de acordo com a área

    

    alert("ok")

}) 