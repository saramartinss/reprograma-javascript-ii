const inputName = document.getElementById("contatoInputNome")
const inputEmail = document.getElementById("contatoInputEmail")
const inputPhone = document.getElementById("contatoInputPhone")
const inputMessage = document.getElementById("contatoInputMessage")
const button = document.querySelector(".contato__button")

button.addEventListener("click", function(event){
    event.preventDefault()
    if (inputName.value === undefined || inputName.value === null || inputName.value === "" || inputName.value === " "){
        inputName.focus()
        return false
    }
    else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus()
        return false
    }
    else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus()
        return false
    }
    else if (inputMessage.value === undefined || inputMessage.value === null || inputMessage.value === "" || inputMessage.value === " ") {
        inputMessage.focus()
        return false
    }
    alert("ok, parabéns")
})