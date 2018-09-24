const header = document.querySelector(".nomeDaMarca")

window.addEventListener("scroll", function(){
  console.log(pageYOffset)

  if (pageYOffset > 200 && pageYOffset < 400) {
    header.style.backgroundPosition = "left -670px"
    header.style.height = "150px"
  }

  else if (pageYOffset >= 400 && pageYOffset < 600) {
    header.style.backgroundPosition = "left -970px"
  }

  else if (pageYOffset >= 600) {
    header.style.backgroundPosition = "left -1265px"
  }

  else {
    header.style.backgroundPosition = "left -300px"
    header.style.height = "300px"
  }
})