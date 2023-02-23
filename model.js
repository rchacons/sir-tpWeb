
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


// Drawing class
class Drawing{
    constructor(){
        
    }

    getForms(){
        return this.forms;
    }

    setForms(forms){
        this.forms=forms;
    }


}

// Form class
class Form{
    constructor(thickness,color){
        this.thickness=thickness;
        this.color=color;
    }


    getThickness(){
        return this.thickness;
    }

    getColor(){
        return this.color;
    }
}


// Rectangle class (implements form)
class Rectangle extends Form{
    constructor(xCoord,yCoord,width,height,thickness,color){
        super(thickness,color);
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.width = width;
        this.height = height;
    }

    getXCoord(){
        return this.xCoord;
    }

    getYCoord(){
        return this.yCoord;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

}

// Line class (implements form)
class Line extends Form{
    constructor(initialX,initialY,thickness,color){
        super(thickness,color);
        this.initialX = initialX;
        this.initialY = initialY;
        this.finalX = 0;
        this.finalY = 0;
    }

    getInitialX(){
        return this.initialX;
    }

    getInitialY(){
        return this.initialY;
    }

    getFinalX(){
        return this.finalX;
    }

    getFinalY(){
        return this.finalY;
    }
}