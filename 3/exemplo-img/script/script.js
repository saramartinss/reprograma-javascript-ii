const links = document.querySelector(".gallery__nav")
const imagem = document.querySelector(".gallery__image")

for (let i=0; i<links.children.length; i++) {
    
    links.children[i].addEventListener("click", function(e){
        e.preventDefault
        const img = this.dataset.image
        imagem.src = img
    })
}