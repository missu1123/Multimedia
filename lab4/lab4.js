var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext("2d");
var startPoint;



function getMousePos(canvas, evt){
	var rect = canvas.getBoundingClientRect();
	return{
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	}
}

function mouseDown(event) {
	startPoint = getMousePos(canvas, event);

}

function mouseUp(event){
	var realMousePos = getMousePos(canvas, event);
	
	drawingContext.beginPath();
	drawingContext.moveTo(startPoint.x, startPoint.y);
	drawingContext.lineTo(realMousePos.x, realMousePos.y);
	drawingContext.stroke();
    
}


function clearCanvas(){
	drawingContext.clearRect(0,0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
