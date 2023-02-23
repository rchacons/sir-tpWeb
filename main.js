
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new Dnd(canvas);

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#79becf');
//rec.paint(ctx);

var ligne = new Line(400, 300, 10, '#c283c6');
//ligne.paint(ctx);


var formArray = new Array();
formArray.push(rec);
formArray.push(ligne);

var drawing = new Drawing();
//drawing.setForms(formArray);
//drawing.paint(ctx, canvas);

// Code final à utiliser pour manipuler Pencil.

var pencil = new Pencil(ctx, drawing, canvas);

