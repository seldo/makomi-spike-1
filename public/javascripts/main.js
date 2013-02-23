$(document).ready(function() {
	var url = '/tools';
	var windowName = 'toolbox';
	var windowSize = 'width=100,height=300,location=no,menubar=no,toolbar=no,scrollbars=no,status=no,resizable=no,top=100,left=300'
	window.open(url, windowName, windowSize);	
	//var draggable = document.getElementById('tool-div');
	//draggable.addEventListener('dragstart',handleDragStart,false);
	var dropzone = document.getElementById('droptargettest');
	dropzone.addEventListener('dragover',handleDragOver,false);
	dropzone.addEventListener('drop',handleDrop,false);
});
/*
var handleDragStart = function(e) {
	e.dataTransfer.setData('text/html', null);
	console.log("Started");
	console.log(e);
}
var handleDragEnd = function(e) {
	console.log("Ended");
	console.log(e);
}
*/
var handleDragOver = function(e) {
	e.preventDefault(); // stops cursor appearing in textareas
};
var handleDrop = function(e) {
	console.log("Dropped");
	console.log(e);
};
var handleDragEnter = function(e) {
	console.log("Entered");
	console.log(e);
}
var handleDragLeave = function(e) {
	console.log("Left");
	console.log(e);
}