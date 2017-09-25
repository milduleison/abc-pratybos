 

// 1. Su kokios markės (modelio) automobiliais padaryta daugiausia (mažiausia) pažeidimų
let = ticketsByBrand = {};

for(let ticket of PAZEIDIMAI) {
    let brand = checkBrandName(ticket.AUTO_MARKE_REGITRA);
    //patikrinti gamintojo pavadinima.
    

    if(!ticketsByBrand[brand]){
       ticketsByBrand [brand] = 1;
    } else{
        ticketsByBrand[brand] += 1;
    }
};
function checkBrandName(name){
        if(name==="VOLKSWAGEN" || name==="VOLKSWAGEN, VW" || name==="VOLKSWAGEN-VW") {
            return "VW";
        } 
        if(name==="TOYOTA" || name==="TOYOTA EUROPE (B)" || name==="TOYOTA MEM (B)") {
            return "TOYOTA";
        }
            return name;
} 

//kokios markes automobiliu yra daugiausiai tarp pazeideju

function getTopItem(obj) {
    let name = "";
    let highestCount = 0;

    for (let item in obj) {
        let count = obj[item];

        if (count > highestCount) {
            highestCount = count;
            name = item;
        }
    }

    return {
        name: name,
        count: highestCount
    };
}
//console.log(getTopItem);
console.log(ticketsByBrand);


// 2. Kurią savaitės dieną padaryta daugiausiai pažeidimų
let ticketsByWeekDay = {};

for (let ticket of PAZEIDIMAI) {
    let ticketDate = new Date(ticket.PAZEIDIMO_LAIKAS); // pvz.: "2017.02.09" truksta replace
    let weekDate = ticketDate.getDay();
    
    if (!ticketsByWeekDay[weekDate]) {
        ticketsByWeekDay[weekDate] = 1;
    } else {
        ticketsByWeekDay[weekDate] += 1;
    }
}

// 3. Kurią metų dieną padaryta daugiausiai pažeidimų

let ticketByYearDay = {};
for (let ticket of PAZEIDIMAI) {
    let dateString = (ticket.PAZEIDIMO_LAIKAS).replace(".", "-").replace(".", "-");
    let ticketDate = new Date(dateString);
    let weekDate = ticketDate.getDay();
    let yearDate = dateString.slice(5, 10)

    
    if (!ticketByYearDay [yearDate]) {
        ticketByYearDay [yearDate] = 1;
    } else {
        ticketByYearDay [yearDate] += 1;
    }
} console.log(ticketByYearDay)

// 4. Kurioje gatvėje padaryta daugiausia pažeidimų

// 5. Kiek % padaryta su įmonės automobiliais

// 6. Kokia įmonė daugiausia pažeidimų
let imonesPazeidimai = PAZEIDIMAI.filter(function(item) {
    return item.AUTO_JURSUB_PAVAD_REGITRA !== "";
});
let priveteVsCompany = (imonesPazeidimai.length * 100) / PAZEIDIMAI.length;

