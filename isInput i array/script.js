let gelynas = [];

function pushData(){
    var inputText = document.getElementById('pavadinimas').value;
    gelynas.push(inputText);
    var x = "";
    for(i = 0; i < gelynas.length; i++) 
        {
            x = x + gelynas[i]+ "<br/>";
        }
        document.getElementById("spausdink").innerHTML = x;
}


//Geles spalva<input type="text" name="text" class="ginput">
//Geles kavpas<input type="text" name="text" class="ginput">   "pavadinismas": "",
    //"spalva": "",
    //"kvapas": "",
