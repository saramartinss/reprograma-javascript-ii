const button = document.querySelector(".select__button")
const inputArea = document.getElementById("selectInputArea")

button.addEventListener("click", function(e){
  e.preventDefault()

  inputArea.remove(inputArea.selectedIndex)
})