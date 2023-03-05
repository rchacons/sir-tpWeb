
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {

    ctx.lineWidth = this.getThickness();

    ctx.beginPath();
    // we're calculating the relative width and height of the rectangle based on the difference between the coordinates of the top-left and bottom-right corners. instead of the absolute coordinates
    ctx.rect(this.getInitialX(), this.getInitialY(), this.getFinalX()-this.getInitialX(),   this.getFinalY()-this.getInitialY());
    ctx.fillStyle = this.getColor();
    ctx.strokeStyle = this.getColor();
    ctx.fill();
    ctx.stroke();
  };
  
Line.prototype.paint = function(ctx) {

    ctx.lineWidth = this.getThickness();

    ctx.beginPath();
    ctx.strokeStyle = this.getColor();
    ctx.moveTo(this.getInitialX(), this.getInitialY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#c1a83a'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (arrayElement) {
        // now fill the canvas
        arrayElement.paint(ctx);
    });
    ctx.fill();

};

class View{
    constructor(controller){
        this.controller = controller;

    }

    updateShapeList(shapes){

        const shapeList = document.getElementById("shapeList");
    
        shapeList.innerHTML = "";

        console.log("shapes size"+shapes.length)

        shapes.forEach(shape => {

            // We save the index to delete later if it's the case
            const index = shapes.indexOf(shape);
    
            var listItem = document.createElement('li');
    
            if(shape instanceof Rectangle){
                listItem.innerText = `Rectangle: (${shape.getInitialX()}, ${shape.getInitialY()}, ${shape.getFinalX()}, ${shape.getFinalY()}, ${shape.getThickness()}, ${shape.getColor()}}`
            }
            else{
                listItem.innerText = `Line: (${shape.getInitialX()}, ${shape.getInitialY()}, ${shape.getFinalX()}, ${shape.getFinalY()}, ${shape.getThickness()}, ${shape.getColor()}}`
            }

            // We add the remove button
            const removeButton = document.createElement('button');
            removeButton.setAttribute("type","button");
            removeButton.classList.add("btn","btn-default");

            const span = document.createElement('span');
            span.classList.add("glyphicon","glyphicon-remove-sign")
            removeButton.appendChild(span);

            listItem.appendChild(removeButton);
            shapeList.appendChild(listItem);

            removeButton.addEventListener("click", () =>{
                // We call the controller's method to delete the form
                this.controller.handleDelete(index);
            });
        });

        
    }
}

