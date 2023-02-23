
var editingMode = { rect: 0, line: 1 };

// function Pencil(ctx, drawing, canvas) {
// 	this.currEditingMode = editingMode.line;
// 	this.currLineWidth = 5;
// 	this.currColour = '#000000';
// 	this.currentShape = 0;

// 	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

// 	new DnD(canvas, this);

// 	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
// };


class Pencil{
	constructor(ctx, drawing, canvas){
		this.ctx = ctx;
		this.drawing = drawing;
		this.canvas = canvas;
		
		this.currEditingMode = editingMode.line;
		this.currLineWidth = 5;
		this.currColour = '#c283c6';
		this.currentShape = 0;
			
		new Dnd(canvas, this);
		

	}


	onInteractionStart(dnd){

		switch(this.currEditingMode){
			case editingMode.rect:{
				this.currentShape = new Rectangle(dnd.getInitialX(),dnd.getInitialY(),dnd.getFinalX(), dnd.getFinalY(),
					this.currLineWidth, this.currColour);
			}
			case editingMode.line:{
				this.currentShape = new Line(dnd.getInitialX(),dnd.getInitialY(),this.currLineWidth,this.currColour);
			}
		}
	}

	onInteractionUpdate(dnd){
		switch(this.currEditingMode){
			case editingMode.rect:{
				this.currentShape.setWidth=dnd.getFinalX()
				this.currentShape.setHeight=dnd.getFinalY()
			}
			case editingMode.line:{
			
				this.currentShape.setFinalX(dnd.getFinalX())
				this.currentShape.setFinalY(dnd.getFinalY())
				
			}
		}
		this.drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	onInteractionEnd(dnd){

		switch(this.currEditingMode){
			case editingMode.rect:{
				this.currentShape.setWidth=dnd.getFinalX
				this.currentShape.setHeight=dnd.getFinalY
			}
			case editingMode.line:{
				this.currentShape.setFinalX=dnd.getFinalX
				this.currentShape.setFinalY=dnd.getFinalY
				
			}
		}
		
		this.drawing.paint(ctx)
		this.currentShape.paint(ctx)
		this.drawing.addForm(this.currentShape)
		
	};


}