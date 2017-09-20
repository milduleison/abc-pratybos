
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
 
while (currentGen <= 4) {
  totalMW += 62;
  document.write("Generatorius #" + currentGen + " prideda 62 MW, for a total of " + totalMW + " MW!</br>");
  currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  document.write("Generatorius #" + currentGen + " prideda 124 MW, for a total of " + totalMW + " MW!</br>");
}


// Viena vista per diena padeda 2 kiausinius. Jonas turi 13vistu. Kiek kiausiniu per menesi, kuriame yra 30 dienu, sudes visos vistos.
var dienosNr = 1;
var vistuSkaicius = 0;
var menesioD = 30;

for(dienosNr = 1; dienosNr <= menesioD; dienosNr++){
var vistuSkaicius = vistuSkaicius+2;
document.write(dienosNr +" Menesio diena "+ "viena vista sudeda " + vistuSkaicius + "kiausiniu, " + "visos vistos kartu"+ (vistuSkaicius*13)  +"</br>");
}

//Ciklas su objektu
var text = "";
var zmogus = {firstname:"Vyatutas", lastname:"Rimsa", miestas:"Vilnius", pomiegis:"Knygos"};
for(var x in zmogus)
  {
    text = text+zmogus[x];
  }
  document.write(text);