const inputTweet = document.getElementById("tweetComposerInput")
const button = document.querySelector(".tweet-composer__button")
const tweets = document.querySelector(".tweets-timeline")
const counter = document.getElementById("tweetComposerCounter")

inputTweet.addEventListener("keyup", function (e) {
    e.preventDefault()

    const textBox = this
    const maxLength = 280
    
    counter.innerHTML = maxLength - textBox.value.length

    if (counter.innerHTML <= 15) {
        counter.style.color = `red`
    } else {
        counter.style.color = `white`
    }

    if (counter.innerHTML < 0) {
        button.disabled = true
    } else {
        button.disabled = false
    }
  })

button.addEventListener("click", function(e){
    e.preventDefault()

    if(inputTweet.value === undefined || inputTweet.value === null || inputTweet.value === "" || inputTweet.value === " ") {
        return false
    }

    const newTweetBox = document.createElement("div")
    newTweetBox.className = "tweets-timeline__box"

    const newTweet = document.createElement("p")
    newTweet.className = "tweets-timeline__tweet"
    newTweet.innerHTML = inputTweet.value 

    const newHeader = document.createElement("div")
    newHeader.className = "tweets-timeline__header"

    const name = document.createElement("span")
    name.className = "tweets-timeline__name"
    name.innerHTML = "sara"

    const username = document.createElement("span")
    username.className = "tweets-timeline__username"
    username.innerHTML = " @sarinha"

    // monName = new Array ("jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez")
    // now = new Date
    // const date = document.createElement("span")
    // date.className = "tweets-timeline__date"
    // date.innerHTML = (` ${now.getDate()} de ${monName[now.getMonth()]}`)

    const date = document.createElement("span")
    date.className = "tweets-timeline__date"
    const newDate = new Date()
    const month = newDate.toLocaleString("pt-br", {month: "short"})
    const day = newDate.getDate()
    date.innerHTML = ` ${day} de ${month}`

    newHeader.appendChild(name)
    newHeader.appendChild(username)
    newHeader.appendChild(date)

    const newFooter = document.createElement("div")
    newFooter.innerHTML = `<button class="tweets-timeline__delete-button">excluir</button>`
    newFooter.addEventListener("click", function(){
        newTweetBox.remove()
    })

    newTweetBox.appendChild(newHeader)
    newTweetBox.appendChild(newTweet)
    newTweetBox.appendChild(newFooter)

    tweets.insertBefore(newTweetBox, tweets.childNodes[0])
    inputTweet.value = ""
    counter.innerHTML = 280
})