const button = document.querySelector(".sidebar-menu__button")
const sidebar = document.querySelector(".sidebar-menu")

button.addEventListener("click", function(e){
    e.preventDefault()
    
    if (sidebar.style.left === '-430px'){
        sidebar.style.left = '0px'
    }
    else {
        sidebar.style.left = '-430px'
    }
}) 