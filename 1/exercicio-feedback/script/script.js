const button = document.querySelector(".feedback__button")
const inputFeedback = document.querySelector(".feedback__input")
const listFeedback = document.querySelector(".testimonials")

button.addEventListener("click", function(event) {
    event.preventDefault()

    const newFeedback = document.createElement("li")
    newFeedback.innerHTML = inputFeedback.value 
    listFeedback.appendChild(newFeedback)

})