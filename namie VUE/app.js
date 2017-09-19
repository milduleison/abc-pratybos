let app = new Vue({
    el: "#app",
    data: {
        message: "Namuose atlikta VUE app!",
        myClass: "active",
        data: "Norisi miego",
        isVisible: "0",
        tekstas: "Tekstas",
        sunys: [
            {
                veisle: "Labradoras",
                Spalva: "Ruda",
                Dydis: "Didelis"        
            },
             {
                veisle: "Dogas",
                Spalva: "Juoda-Ruda",
                Dydis: "Didelis"        
            },
            {
                veisle: "Konikorsa",
                Spalva: "Juoda",
                Dydis: "Didelis"        
            },
        ],

        kitiSunys:{
            Veisle: "",
            Spalva: "",
            Metai: "",
        }
    },

     methods: {
        "addDog": function(){
            app.sunys.push(app.kitiSunys);
        }
    },

      /*  el: "#app2",
       
    zmones: [
        {
        vardas:"milda",
        pavarde:"rim",
        lytis:"moteris",
        amzius:"34"
    },
],

    kitiZmones:{
        vardas:"",
        pavarde:"",
        lytis:"",
        amzius:""
    },
    
    methods: {
        "addPerson": function(){
            app.zmones.push(app.kitiZmones);
        },
    },*/

});

