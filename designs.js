// create a table variable
var userTable = document.getElementById('pixelCanvas')

 // create a color variable
 var availableColor = document.getElementById('colorPicker');

// function to create the grid
function makeGrid()
 {  
    // before creating new table to resize, check if table has child nodes.
    // delete the nodes to prevent creating tables on tables.
    while(userTable.hasChildNodes()){
        userTable.removeChild(userTable.firstChild);

        // reset background color to default
        userTable.style.backgroundColor = "white";
    }

    //get the dimension for the table based on user input.
    var pixarHeight = document.getElementById("inputHeight").value;
    var pixarWidth = document.getElementById("inputWidth").value;

    // loop through user specified height to create the rows
    for (var i = 0; i < pixarHeight; i++){
        var pixarRow = document.createElement("tr");
        pixarRow.id = "userRow" + i;

        // append the created rows to the table
        userTable.appendChild(pixarRow);

        // loop through user specified width to create columns
        var temprow = document.getElementById("userRow" + i);
        
        for (var j = 0; j < pixarWidth; j++){
            var pixarColumn = document.createElement("td");
            // appended created column to the rows.
            temprow.appendChild(pixarColumn);
        }
    }
 }

// change the color of the pixel
userTable.addEventListener("click", function (e)
 {
    // using the event, target the specific cell being clicked
    // change the background color to the captured color picker value
    e.target.style.backgroundColor = availableColor.value;

});

// lister for user to submit the form to create the grid.
document.getElementById("sizePicker").addEventListener("submit", function(e)
{
    // excute the function to create the form
    makeGrid();
    // turn off default event that causes pages to refresh clearing the tables.
    e.preventDefault();
})
