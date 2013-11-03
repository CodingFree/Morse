//Show / Hide Settings view
var viewSettings = document.querySelector("#settings-view");



var myCancel = document.getElementById("translateButton");
myCancel.addEventListener("click", function(event){
    viewSettings.classList.remove('move-up');
    viewSettings.classList.add('move-down');
	//Se evita que se ejecute la acción por defecto.
	event.preventDefault ? event.preventDefault() : (event.returnValue=false);
});
