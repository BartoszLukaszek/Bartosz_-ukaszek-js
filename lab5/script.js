let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const window_height = window.innerHeight;
const window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "black";

let Distance = function(posX, posY, posX2, posY2){
    const result = Math.sqrt(Math.pow(posX2 - posX, 2) + Math.pow(posY2 - posY, 2));
    return result;
}

class Circle{
    constructor(posX, posY, radius, color, speed){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.dx = 4*this.speed;
        this.dy = 2*this.speed;
    }

    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        
        context.arc(this.posX,this.posY,this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        
    }

    update(){

        this.draw(context);

        if((this.posX + this.radius) > window_width){
            this.dx =- this.dx;
        }
        if((this.posX - this.radius) < 0){
            this.dx =- this.dx;
        }

        if((this.posY + this.radius) > window_height){
            this.dy =- this.dy;
        }
        if((this.posY - this.radius) < 0){
            this.dy =- this.dy;
        }

        this.posX += this.dx;
        this.posY += this.dy;
    }
    

    move(){
        window.addEventListener('deviceorientation', e=>{
            console.log(e);
            this.dx=e.gamma/45
            this.dy=e.beta/45
        })
    }
    
    
}



let circle = new Circle(0.5*window_width, 0.5*window_height, 30, "white", 0);
let circle2 = new Circle(0.1*window_width, 0.5*window_height, 60, "white", 0);
let circle3 = new Circle(0.3*window_width, 0.5*window_height, 30, "red", 0);
let circle4 = new Circle(0.3*window_width, 0.2*window_height, 30, "red", 0);
let circle5 = new Circle(0.3*window_width, 0.8*window_height, 30, "red", 0);
let circle6 = new Circle(0.2*window_width, 0.5*window_height, 30, "red", 0);
let circle7 = new Circle(0.2*window_width, 0.2*window_height, 30, "red", 0);
let circle8 = new Circle(0.2*window_width, 0.8*window_height, 30, "red", 0);

circle.draw(context);
circle2.draw(context);
circle3.draw(context);
circle4.draw(context);
circle5.draw(context);
circle6.draw(context);
circle7.draw(context);
circle8.draw(context);

const time = Date.now();

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    context.clearRect(0,0,window_width,window_height);

    circle.update();
    circle2.update();
    circle3.update();
    circle4.update();
    circle5.update();
    circle6.update();
    circle7.update();
    circle8.update();

    if(Distance(circle.posX,circle.posY,circle2.posX,circle2.posY) < (circle2.radius)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="blue";
        circle2.color="blue"; 

        const time2 = Date.now() - time;
        alert("You Win !!! Twój czas to: "+(time2/1000));
    }
    
    if(Distance(circle.posX,circle.posY,circle3.posX,circle3.posY) < (circle3.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red";   
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000));  
    }
    if(Distance(circle.posX,circle.posY,circle4.posX,circle4.posY) < (circle4.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red";  
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000)); 
    }
    if(Distance(circle.posX,circle.posY,circle5.posX,circle5.posY) < (circle5.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red"; 
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000)+" sekund");    
    }
    if(Distance(circle.posX,circle.posY,circle6.posX,circle6.posY) < (circle6.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red"; 
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000));    
    }
    if(Distance(circle.posX,circle.posY,circle7.posX,circle7.posY) < (circle7.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red";  
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000));
    }
    if(Distance(circle.posX,circle.posY,circle8.posX,circle8.posY) < (circle8.radius+29)){
        circle.speed = 0;
        circle.dx = 0;
        circle.dy = 0;
        circle.color="red";   
        const time2 = Date.now() - time;
        alert("You Lose !!! Twój czas to: "+(time2/1000));
    }
}


circle.move();
updateCircle();





