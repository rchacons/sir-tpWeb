
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


// Drawing class
class Drawing{
    constructor(){
        this.forms = new Array();
    };

    getForms(){
        return this.forms;
    }

    setForms(forms){
        this.forms=forms;
    }

    addForm(form){
        this.forms.push(form);
    }


}

// Form class
class Form{
    constructor(initialX,initialY,finalX,finalY,thickness,color){
        this.initialX = initialX;
        this.initialY = initialY;
        this.finalX = finalX;
        this.finalY = finalY;
        this.thickness=thickness;
        this.color=color;
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
        super(xCoord, yCoord, width, height,thickness,color);
        console.log("width:"+width);
        console.log("height:"+height);
    };
}

// Line class (implements form)
class Line extends Form{
    constructor(initialX,initialY, finalX, finalY, thickness,color){
        super(initialX,initialY,finalX,finalY,thickness,color);
    
    };
}