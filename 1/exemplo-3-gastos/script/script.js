const button = document.querySelector(".transacao__button")

button.addEventListener("click", function(event){
    event.preventDefault() 

    const table = document.querySelector(".extrato__table")

    const row = document.createElement("tr")

    const colunaNome = document.createElement("td")
    const inputNome = document.getElementById("transacaoInputName")
    colunaNome.innerHTML = inputNome.value

    const colunaValor = document.createElement("td")
    const inputValor = document.getElementById("transacaoInputMoney")
    colunaValor.innerHTML = inputValor.value

    const colunaData = document.createElement("td")    
    const inputData = document.getElementById("transacaoInputDate")    
    colunaData.innerHTML = inputData.value 

    row.appendChild(colunaNome)
    row.appendChild(colunaValor)
    row.appendChild(colunaData)

    table.appendChild(row)
    
    
})