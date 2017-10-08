// if salygos 
var manPatinkaPica = true;
if(manPatinkaPica){
    document.write("Vytautas nupirks didziule pica")
};

var manPatinkaSaltibarsciai = false;
if(manPatinkaSaltibarsciai){
    document.write("Liksiu nevalgius")
};

if(7>5){
    document.write("septyni yra daugiau uz penkis")
};

var myNum = 10;
if(myNum == 10){
    document.write("Taip, tai tiesa")
} else{
    document.write("MELAS, KLAIDA!")
}

// else if salyga
var myAge = 17
if (myAge > 30){
 document.write("Tu jau ketvirtoje desimtyje");
} else if (myAge > 20){
document.write("Sveikinu, tu esi jaunas zmogus");
} else if (myAge > 18){
document.write("Ar jau baigiai mokykla")
} else {
document.write("Tavo amziu ir poreikius sunku nusakyti")};

// Logikos operatoriai
//IR
var myAge = 25;
if(myAge >= 18 && myAge <= 30){
    document.write("</br>"+"you can come!!!")
} else{
    document.write("</br>"+"Oh no-stay home!")
};
// Arba
var myAge = 25;
if(myAge < 18 || myAge > 30 || myAge===25){
    document.write("</br>"+"Oh no-stay home, my frend!")
    
} else{
    document.write("</br>"+"FINE, you can come!!!")
};

//Loop

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){
 links[i].className="link-" +i;  
};

//Funkcija

function getSum(a,b){
    var sum= a+b
    console.log(sum);

}
var myResult = getSum(3,128);

//stringas
let myString = "Tai yra trumpas mano stringas";
console.log(myString.toUpperCase());
console.log(myString.indexOf("yra"));
if (myString.indexOf("mano")===-1){
    console.log("tokio zodzio nera")
} else{
    console.log(myString.indexOf("mano"));
};

let string1 = "abc";
let string2 = "bcd";
console.log(string1 < string2); //nes a pirmiau uz b todel rezultatas true

let string3 = "cde";
let string4 = "CDE";
console.log(string3===string4);//false nes didziosios raides 
console.log(string3.toLowerCase()===string4.toLowerCase())

//slice
var strin1 = "Laba diena"
var strin2 = strin1.slice(2,7); // nurodom nuo kurio iki kurio norim isimti
var strin3 = strin1.slice(3); //nurodum nuo kurio pradada isimti ir isimam iki pat galo, nes pabaigos nurodyti nebutina
//split
var tags = "jautiena, arbata, medus, arbuzas, pomidorai, agurkai, alyvuoges, vistiena, avinzirniai, duona, sviestas, garstycios, pipirai";
var tagsMasyvas = tags.split(",");

//Objektai
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){
 console.log("now driving");
};
myCar.drive();

var myCar2 = {
maxSpeed: 80,
driver: "Vytautas",
drive: function(speed, time){
 console.log(speed * time);
},
logDriver: function(){
console.log("Vairuotojo vardas yra " + this.driver)
}
};
myCar2.drive(57, 4);
console.log(myCar2.maxSpeed);
myCar2.logDriver();


//Konstruktoriaus funkcija]

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let volvo = new Car("volvo", "XC90", 2006);
console.log(volvo);

let honda = new Car("Honda", "Jazz", "2003");
console.log(honda);

//Data ir laikas:

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(2015, 02, 09);
console.log(myPastDate);
var myFutureDate = new Date(2025, 02, 09);
console.log(myFutureDate);


var birthday = new Date(1983, 05, 03, 18, 20);
console.log(birthday.getFullYear());//ispausdina metus
console.log(birthday.getDate());//ispausdina diena
console.log(birthday.getDay());//ispausdina savaites diena
console.log(birthday.getHours());// ispausdina valandas


// issislkeidziandis textas, kaip meniu
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
  if(content.className == "open") {
      //shrink the box
    content.className = "";
    button.innerHTML = "Show More";

  } else{
      //expand the box
      content.className = "open";
      button.innerHTML = "Show Less";
      
  }

};
