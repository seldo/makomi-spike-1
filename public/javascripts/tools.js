$(document).ready(function() {
	var draggable = document.getElementById('tool-div');
	draggable.addEventListener('dragstart',handleDragStart,false);
});
var handleDragStart = function(e) {
	e.dataTransfer.setData('text/html', null);
	console.log("Started");
	console.log(e);
}
var handleDragOver = function(e) {
	e.preventDefault(); // stops cursor appearing in textareas
};
var handleDragEnd = function(e) {
	console.log("Ended");
	console.log(e);
}
