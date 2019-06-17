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
    $('#btn-display').empty()
    for(i = 0; i < topics.length; i++) {
    let gifBtn = $('<button>')
    gifBtn
        .addClass("gif-btn")
        .text(topics[i])
        .attr("data-gif", topics[i])
    $('#btn-display').append(gifBtn)
    }
}

//call makeBtn function
makeBtn()

//click event to create new topic button
$("#search-submit").on("click", function(event){
    event.preventDefault()
    let searchFor = $("#search-input").val().trim()
    topics.push(searchFor)
    makeBtn()
})

$('button').on("click", function (){
    let getGif = $(this).attr("data-gif")
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + getGif + "&api_key=DNjwWLOHXOEZm2mWllD1dgkcS3sEmUh4&limit=10&rating=pg-13"
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response)
        let rating = response.data[0].rating
        let imageURL = response.data[0].images.original.url
        let image = $("<img>")
        image.attr("src", imageURL)
        image.attr("alt", "cute gif")
        $("#gif-display").prepend(image)        
    })
})
