const button = document.querySelector(".sidebar-menu__button")
const sidebar = document.querySelector(".sidebar-menu")

let count = 1
button.addEventListener("click", function(e){
    e.preventDefault()
    
    sidebar.style.left = "-435px"
    count++

    if (count % 2 !== 0) {
        sidebar.style.left = "0px"
    }
}) 