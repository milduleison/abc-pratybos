let app = new Vue({
    el: "#vue-app",
    data: {
        name: "Shaun",
        job: "Plataus profilio darbuotojas",
        age: "38",
        x:0,
        y:0
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
        }
    }
    
    });
