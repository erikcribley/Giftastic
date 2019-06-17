//api key DNjwWLOHXOEZm2mWllD1dgkcS3sEmUh4

let topics = [
    "kitties",
    "doge",
    "octopi",
    "tardigrades",
    "parrots",
    "robots",
    "snakes",
    "giraffes",
    "lizards",
    "unicorns",
]

for(i = 0; i < topics.length; i++) {
    let gifBtn = $('<button>')
    gifBtn.text(topics[i])
    $('#btn-display').append(gifBtn)
}

let searchFor = $('#search-input').val()

let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchFor + "&api_key=DNjwWLOHXOEZm2mWllD1dgkcS3sEmUh4&limit=10&rating=pg-13"

console.log(searchFor)