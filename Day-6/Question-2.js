
class Circle{

    constructor(radius = 1, color = "red"){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        console.log(this.radius);
    }
    setRadius(userRadius){
        this.radius = userRadius;
    }
    setColor(userColor){
        this.color = userColor;
    }
    getColor(){
        console.log(this.color);
    }
    getArea(){
        console.log(Math.PI * this.radius * this.radius);
    }
    getCircumference(){
        console.log(Math.PI * 2 * this.radius);
    }
    
}

