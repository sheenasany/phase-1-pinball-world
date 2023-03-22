// global variables
const gameList = document.querySelector(".game-list")
const gameDetails = document.querySelector(".game-details")
const gameForm = document.querySelector("#high-score-form")
let currentGame = {}
// will need to create an empty object to take in single game later in displayDetails func
// console.log(gameList, gameDetails, gameForm)
gameUrl = "http://localhost:3000/games"
fetch(gameUrl)
    .then(res => res.json())
    .then(gameData => {
        displayList(gameData)
        displayDetails(gameData[0])
        // on page load, display the first game in details div
        // otherwise, would display the last game in the array if not specified
    })
    
const displayList = (games) => {
    // console.log(gameData[0])
    return games.map(game => {
        // console.log(game)
        const title = document.createElement('h5')
        title.textContent = `${game.name} <${game.manufacturer_name}>`
        // console.log(title)
        gameList.append(title)
        title.addEventListener('click', () => (displayDetails(game)))
        // strange to note, console.log returns undefined on displayDetails callback function
    }
)}
// grab all the detail elements
const image = document.querySelector("#detail-image")
const detailTitle = document.querySelector("#detail-title")
const highScore = document.querySelector("#detail-high-score")
const displayDetails = (game) => {
    currentGame = game
    // console.log(game)
    image.src = game.image
    detailTitle.textContent = game.name
    highScore.textContent = game.high_score
    // console.log(image, detailTitle, highScore)
}
gameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // alert("submitted punk!")
    const inputScore = (e.target[id="score-input"].value)
    // console.log(currentGame)
    // grab the currentGame that was selected
    // insert the input from the form as the current game's highscore
    // then plug in that current game's highscore onto the highscore on display
    currentGame.high_score = inputScore
    highScore.textContent = currentGame.high_score
    gameForm.reset()
})