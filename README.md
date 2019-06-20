# Giftastic

This is the gif assignment. It uses AJAX and the GIPHY API to dynamically display gifs on the page, manipulating the HTML 
with jQuery. 

The first function creates a series of buttons from an array of preselected gif topics. 

Secondly there is a click event on the buttons which sends a query through AJAX to retrieve 10 gifs, passing the text 
of the button to the queryURL. Furthermore, it manipulates the HTML, appending the appropriate div to display the gifs and 
ratings.

The second click event is on the images to switch between a still state and an animated state.

The third click event is on the submit button, which takes the value from the input text box, pushes it to the intial array,
clears the intial displayed buttons, and reruns the function to create buttons, adding the additional topic.