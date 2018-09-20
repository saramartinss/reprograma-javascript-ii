const inputTweet = document.getElementById("tweetComposerInput")
const button = document.querySelector(".tweet-composer__button")
const tweets = document.querySelector(".tweets-timeline")

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

    monName = new Array ("jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez")
    now = new Date
    const date = document.createElement("span")
    date.className = "tweets-timeline__date"
    date.innerHTML = (` ${now.getDate()} de ${monName[now.getMonth()]}`)

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
})