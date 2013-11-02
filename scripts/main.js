function morse(morseString){
	//Miembros privados.
	var pattern = new Array();

	//Miembros públicos.
	this.dotTime = 200;
	this.dashTime = 400;
	this.separationTime = 100;

	//Descomponemos la cadena. Si tiene un carácter inválido, 
	// no se procesa ese carácter.
	for (var i = 0; i <= morseString.length -1; i++) {
		if(morseString[i] == "."){
			pattern.push(this.dotTime);
			pattern.push(this.separationTime);
		}else if(morseString[i] =="-"){
			pattern.push(this.dashTime);
			pattern.push(this.separationTime);		
		}
	};

	this.vibrate = function(){
		//En caso de que no se haya podido inicializar el patrón, no vibra.
		navigator.vibrate(pattern);
	}
}


//Código principal.
var myForm = document.getElementById("form");
myForm.addEventListener("submit", function(event) {
	//Se procesa el formulario.
    var morseString = document.morse.code.value;
    //Se crea el objeto morse y vibra.
	morseObject = new morse(morseString);
	morseObject.vibrate();
	//Se evita que se ejecute la acción por defecto.
	event.preventDefault ? event.preventDefault() : (event.returnValue=false);
});

var myCancel = document.getElementById("cancel");
myCancel.addEventListener("click", function(event){
	//Se cancela cualquier tipo de vibración.
	navigator.vibrate(0);
	//Se evita que se ejecute la acción por defecto.
	event.preventDefault ? event.preventDefault() : (event.returnValue=false);
});

