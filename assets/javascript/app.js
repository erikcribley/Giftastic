//array of GIF topics
let topics = [
    "kitties",
    "doge",
    "octopi",
    "tardigrades",
    "pterosaurs",
    "robots",
    "snakes",
    "giraffes",
    "lizards",
    "unicorns",
]

//loop to generate topic buttons
function makeBtn () {
    for(i = 0; i < topics.length; i++) {
    let gifBtn = $('<button>')
    gifBtn.text(topics[i])
    $('#btn-display').append(gifBtn)
    }
}

//call makeBtn function
makeBtn()

//make a new button
function newBtn() {
    $('#btn-display').empty()
    makeBtn()
}

//click event to create new topic button
$("#search-submit").on("click", function(event){
    event.preventDefault()
    let searchFor = $("#search-input").val()
    topics.push(searchFor)
    newBtn()
})


let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "x" + "&api_key=DNjwWLOHXOEZm2mWllD1dgkcS3sEmUh4&limit=10&rating=pg-13"

