
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {

    ctx.lineWidth = this.getThickness();

    ctx.beginPath();
    // we're calculating the relative width and height of the rectangle based on the difference between the coordinates of the top-left and bottom-right corners. instead of the absolute coordinates
    ctx.rect(this.getInitialX(), this.getInitialY(), this.getFinalX()-this.getInitialX(),   this.getFinalY()-this.getInitialY());
    ctx.fillStyle = this.getColor();
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
