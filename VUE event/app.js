Vue.component('greeting', {
template: '<p>Hey ther. I am a re-usable component. We are<strong>{{ name }}</strong> <button v-on:click="changeName">Pakeisti vardus</button></p>',

data: function(){
    return{
        name: "Emilija ir Lukas"
    }
},
methods: {
    changeName: function(){
        this.name = "Austeja ir Matas";
    }
}
})

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

        readRefs: function(){
            console.log(this.$refs.input.value);
        }
       
    },

        computed:{
             addToA:function(){
             console.log("addToA");
             return this.a + this.age;
        },
            addToB:function(){
            console.log("addToB");
            return this.b + this.age;
        },
        compClasses:function(){
            return {
                available:this.available,
                nearby:this.nearby
            }
        }
        }

     });
let one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "Vue App One"
    },
    methods:{
      
       
    },

    computed:{
        greet: function(){
            return "Hello from app one :)"
        }
    }

     });

let two = new Vue({
    el: "#vue-app-two",
    data: {
       title: "Vue App Two",
       
    },

    methods: {
      changeTitle: function(){
        one.title = "Pavadinimas pakeistas";
       
      }
       
    },

    computed:{
        greet: function(){
            return "Hello from app tow ;)"
        }
    }

     });