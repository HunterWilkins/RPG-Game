//health and name variables, and position array.

var characters = {

    names : ["Mecha Slime", "Aetherial Sconce", "Bug Homonculous", "Flying Tree"],

    healthArray : [100, 210, 80, 230],

    images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200"
    ]

}



//for loop that takes all the names, health values, and images of characters and 
//appends it within the characters-row div.

for (var i = 0; i < characters.names.length; i++){
    //defining the main div for each character
    var newDiv = $("<div class = 'charDiv col-3'>");

    //defining the elements to be put inside newDiv
    var newImg = $("<img src='" + characters.images[i] + "' alt='placeholder' id = 'mecha-slime' class = 'col-12 images'>")
    var newName = $("<span class = 'col-12 char-titles'>");
    var newHealth = $("<span class = 'col-12 char-health'>");
    
    newName.text(characters.names[i]);
    newHealth.text("Health: " + characters.healthArray[i]);
    
    //adding all the new elements into the new div
    newDiv.append(newName);
    newDiv.append(newImg);
    newDiv.append(newHealth);

    //adding newDiv into characters-row
    $(".characters-row").append(newDiv);
}

function rearrange(id){
    console.log("rearrange was called...");
}   





//onclick function
$(".attack-btn").on("click", function(){
    
})