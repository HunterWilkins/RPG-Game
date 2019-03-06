//health, character, and attack variables

var characters = {

    names : ["Mecha Slime", "Aetherial Sconce", "Bug Homonculous", "Flying Tree"],

    healthArray : [100, 210, 80, 230]

}

//for loop that takes all the names, health values, and images of characters and 
//appends it within the characters div.

for (var i = 0; i < characters.names.length; i++){
    //applying the names
    var charTitle = $("<span class = 'col-3'>");
    charTitle.text(characters.names[i]);
    
    //applying the health
    var charHealth = $("<span class = 'col-3'>");
    charHealth.text("Health: " + characters.healthArray[i]);

    //applying the images
    var charImage = $("<img src='https://via.placeholder.com/200' alt='placeholder' class = 'col-3'>")

    //appending all the info
    $(".char-titles").append(charTitle);
    $(".char-health").append(charHealth);
    $(".char-images").append(charImage);
}




//onclick function
$("#attack-btn").on("click", function(){

})