const img = document.querySelector(".gallery__image")
const title = document.querySelector(".gallery__caption")
const links = document.querySelector(".gallery__nav")

for (i=0; i<links.children.length; i++) {
    links.children[i].addEventListener("click", function(e){
        e.preventDefault()

        const image = this.dataset.image
        const subtitle = this.dataset.title
        img.src = image
        title.innerHTML = subtitle
    })
}