$(document).ready(function() {
	var tools = document.getElementById('toolbar').getElementsByTagName('li');
	$.each(tools, function() { addEventListener('dragstart',handleDragStart,false) } );
});
var handleDragStart = function(e) {
	e.dataTransfer.setData("text/plain", e.target.id);
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
