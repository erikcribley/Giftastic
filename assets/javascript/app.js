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
        .text(topics[i])
    $('#btn-display').append(gifBtn)
    }
}

//call makeBtn function
makeBtn()

//click event for buttons to get and display gifs
$('#btn-display').on("click", "button", function(){
    $("#gif-display").empty()
    let getGif = $(this).text()
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + getGif + "&api_key=DNjwWLOHXOEZm2mWllD1dgkcS3sEmUh4&limit=10&rating=pg"
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response)
        for (i = 0; i < response.data.length; i++) {
            let rating = response.data[i].rating;
            let imageURL = response.data[i].images.original_still.url;
            let imageAnimateURL = response.data[i].images.original.url;
            let image = $("<img>")
            image
                .attr("src", imageURL)
                .attr("alt", "cute gif")
                .attr("data-still", imageURL)
                .attr("data-animate", imageAnimateURL)
            let isRated = $("<p>")
            isRated
                .text("Rating: " + rating)
                .addClass("rating-text")
            $("#gif-display")  
                .append(image) 
                .append(isRated)          
        }
        //Click event to switch from still to animated
        $('img').on("click", function(){
            let state = $(this).attr("data-state")
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"))
                $(this).attr("data-state", "animate")        
            } else {
                $(this).attr("src", $(this).attr("data-still"))
                $(this).attr("data-state", "still")
            }
        })  
    })
})

//click event to create new topic button
$("#search-submit").on("click", function(event){
    event.preventDefault()
    let searchFor = $("#search-input").val().trim()
    topics.push(searchFor)
    makeBtn()
})