
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
		this.drawing.paint(ctx);
		

	}


	checkWidgets(){
		if(document.getElementById('butRect').checked){
			this.currEditingMode = editingMode.rect;
		}
		else{
			this.currEditingMode = editingMode.line;
		}

		this.currLineWidth= document.getElementById('spinnerWidth').value;
		this.currColour=document.getElementById('colour').value;
	}

	onInteractionStart(dnd){

		this.checkWidgets();

		switch(this.currEditingMode){
			
			case editingMode.rect:{
				console.log(this.currColour);
				this.currentShape = new Rectangle(dnd.getInitialX(),dnd.getInitialY(),dnd.getFinalX(), dnd.getFinalY(),
				this.currLineWidth, this.currColour);
				break;
			}
			case editingMode.line:{
				this.currentShape = new Line(dnd.getInitialX(),dnd.getInitialY(),dnd.getFinalX(), dnd.getFinalY(),
				this.currLineWidth, this.currColour);
				break;
			}
		}
	}

	onInteractionUpdate(dnd){
		this.currentShape.finalX= dnd.getFinalX();
		this.currentShape.finalY= dnd.getFinalY();
		this.drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	onInteractionEnd(dnd){
		console.log("Dnd: X: "+dnd.finalX+", Y: "+dnd.finalY);

		this.currentShape.finalX= dnd.getFinalX();
		this.currentShape.finalY= dnd.getFinalY();		
		this.drawing.addForm(this.currentShape)
		this.drawing.paint(ctx)
		
	};

	


}