
$("#submitButton").click(function(event) {
    event.preventDefault();
    // Select size input.
    var x = $("#inputHeight").val();
    var y = $("#inputWidth").val();    
    $("tr").remove();


    // When size is submitted by the user:
    for (var i = 1; i <= x; i++){
        $("#pixelCanvas").append("<tr id=tables" + i + "></tr>");
        for (var j = 1; j <=y; j++){
            $("#tables" + i).append("<td></td>");
        } 
    }
})

// fill the box with color.
$("#pixelCanvas").on("click", "td", function(event){
    // Select color input.
    var color = $("#colorPicker").val();
    $(event.target).css("background-color", color);
    // remove the color
    $(event.target).css("background-color", removeColor);
})

//PixelArtMaker by Tarfa Alhumaidan.