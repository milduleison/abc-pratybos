let app = new Vue({
    el: "#vue-app",
    data: {
        name: "Shaun",
        job: "Plataus profilio darbuotojas",
        age: 38,
        x:0,
        y:0,
        justName: "",
        justAge: "",
        dogName: "",
        catName: "",
        a:0,
        b:0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters:["Mario", "Luigi", "Yoshi", "Bowser"],
        ninjas:[
            {name: "Austeja", age: 2},
            {name: "Milda", age: 34},
            {name: "Vytautas", age: 37},
        ]
    },
    methods:{
        greet:function(time){
            return "Good" + time +" "+ this.name;
        },

       add: function(inc){
            this.age+=inc;
        },
        subtract: function(dec){
            this.age-=dec;
        },
        updateXY:function(event){
    console.log(event);
    this.x=event.offsetX;
    this.y=event.offsetY;
        },
        logName:function(){
            console.log("Tu parasiai savo varda")
        },
        logAge:function(){
            console.log("Tu parasiai savo amziu")
        },
       
    },

        computed:{
        //      addToA:function(){
        //     console.log("addToA");
        //     return this.a + this.age;
        // },
        //     addToB:function(){
        //     console.log("addToB");
        //     return this.b + this.age;
        // },
        compClasses:function(){
            return {
                available:this.available,
                nearby:this.nearby
            }
        }
        }

     });
