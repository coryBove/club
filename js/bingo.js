// This content appears on the Bingo page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on the Bingo page as plain text.

var bingoItems = 
{
    item1 : {
        name : "",
        description :
         
        `
        <p>
        Monday, Friday - Doors: 4:30, Bingo: 6:30 - 8:30
        </p>

        <p>
        Saturday - Doors: 11:45, Bingo: 1:30 - 3:30
        </p>

        <p>
        Text this number to sign up for alerts:
        <br>
        (555) 555-5555
        </p>
        `

    }
};

// Edit the portion below if you're comfortable with JavaScript

function displayBingo(bingoItems) {    
    for(x in bingoItems) {
        var mainDiv = document.getElementById('mainDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = bingoItems[x].name;
        description.innerHTML =  bingoItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayBingo(bingoItems);