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

//Pagal paskaita: Is input perkeliam duomenis i console
let addDataButton = document.querySelector(".btn-save-data");


let automobiliai = [{
    "marke": "",
    "modelis": "",
    "metai": ""
}];

    let markeElement = document.querySelector("#marke");
    let modelisElement = document.querySelector("#modelis");
    let metaiElement = document.querySelector("#metai");

    function addData(){
        
        let marke = markeElement.value;
        let modelis = modelisElement.value;
        let metai = metaiElement.value;
  if (!marke || !modelis || !metai) {
            alert("Neįvesti visi laukeliai");
            return;
        }

        let duomenys = {
            "marke": marke,
            "modelis": modelis,
            "metai": metai
        }
    
       automobiliai.push(duomenys);
       console.log("Duomenys:", duomenys.marke, duomenys.modelis, duomenys.metai);
        document.write("Duomenys:" + " Automobilio marke - "+ duomenys.marke + " Automobilio modelis - " + duomenys.modelis + " Automobilio metai - " + duomenys.metai); 
    };  
    

//Geles spalva<input type="text" name="text" class="ginput">
//Geles kavpas<input type="text" name="text" class="ginput">   "pavadinismas": "",
    //"spalva": "",
    //"kvapas": ""
