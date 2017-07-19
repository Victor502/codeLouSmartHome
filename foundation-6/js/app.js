$(document).foundation();

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);
//Add overlay
$("body").append($overlay);
//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
  //Update overlay with the image linked in the link
    $image.attr("src",imageLocation);

  //Get child's alt attribute and set caption
    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);
    
        //Show the overlay. 
    $overlay.show();
    
    });

//When overlay is clicked
$overlay.click(function (){
      //Hide the overlay
    $overlay.hide();
    
});










