
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class Dnd{
  constructor(canvas,interactor){
    // Définir ici les attributs de la 'classe'
    this.canvas=canvas;
    this.interactor=interactor;  
    this.initialX = 0;
    this.initialY = 0;
    this.finalX = 0;
    this.finalY = 0;  
    this.isDragging = false;

    this.drag = this.drag.bind(this);
    this.move = this.move.bind(this);
    this.drop = this.drop.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    this.canvas.addEventListener("mousedown",this.drag)
    this.canvas.addEventListener("mousemove",this.move)
    this.canvas.addEventListener("mouseup",this.drop)

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

  // Developper les 3 fonctions gérant les événements
  // Drag function
  drag(evt){

    this.initialX = getMousePosition(canvas,evt).x;
    this.initialY = getMousePosition(canvas,evt).y;
    
    console.log("Drag: X:"+this.initialX+", Y"+this.initialY);
    this.isDragging = true;
    this.interactor.onInteractionStart(this);


  };
  
  // Move function
  move(evt){

    if(this.isDragging){
      this.finalX = getMousePosition(canvas,evt).x;
      this.finalY = getMousePosition(canvas,evt).y;
      console.log("Move: X:"+this.finalX+", Y"+this.finalY);
      this.interactor.onInteractionUpdate(this);

    }
    

  };

  // Drop function
  drop(evt){


    if(this.isDragging){
      
      this.finalX = getMousePosition(canvas,evt).x;
      this.finalY = getMousePosition(canvas,evt).y;
      this.isDragging = false;
      console.log("Drop: X:"+this.finalX+", Y"+this.finalY);

      this.interactor.onInteractionEnd(this);
    }

    
  };
  
}



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {

  // It returns the size and position of a canvas element relative to the browser window
  // We use them because the 'MouseEvent object's clientX and clientY properties gives the coordinates of the mous relative to the viewport (browser), not the canvas.'
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};


  





