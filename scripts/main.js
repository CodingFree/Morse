function morse(morseString) {
    //Miembros privados.
    var pattern = new Array();

    //Miembros públicos.
    this.dotTime = 200;
    this.dashTime = 400;
    this.separationTime = 100;

    //Descomponemos la cadena. Si tiene un carácter inválido, 
    // no se procesa ese carácter.
    for (var i = 0; i <= morseString.length - 1; i++) {
        if (morseString[i] == ".") {
            pattern.push(this.dotTime);
            pattern.push(this.separationTime);
        } else if (morseString[i] == "-") {
            pattern.push(this.dashTime);
            pattern.push(this.separationTime);
        }
    };

    this.vibrate = function () {
        //En caso de que no se haya podido inicializar el patrón, no vibra.
        navigator.vibrate(pattern);
    }
}


//Formulario de vibración.
var vibrationForm = document.getElementById("vibrationForm");
vibrationForm.addEventListener("submit", function (event) {
    //Se procesa el formulario.
    var morseString = document.morseString.code.value;
    //Se crea el objeto morse y vibra.
    morseObject = new morse(morseString);
    morseObject.vibrate();
    //Se evita que se ejecute la acción por defecto.
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
});


//-- NAVIGATION THINGS -- ///

var myCancel = document.getElementById("cancelVibration");
myCancel.addEventListener("click", function (event) {
    //Se cancela cualquier tipo de vibración.
    navigator.vibrate(0);
    //Se evita que se ejecute la acción por defecto.
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
});


//Show / Hide Settings view
var viewTranslator = document.querySelector("#translation-view");

var translateButton = document.getElementById("translateButton");
translateButton.addEventListener("click", function (event) {
    viewTranslator.classList.remove('move-up');
    viewTranslator.classList.add('move-down');

    var normal = document.normalString.myString.value;
    document.morseString.code.value = string2Morse(normal);

    //Se evita que se ejecute la acción por defecto.
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
});

var returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", function (event) {
    viewTranslator.classList.remove('move-down');
    viewTranslator.classList.add('move-up');
    //Se evita que se ejecute la acción por defecto.
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
});

//-- MORSE THINGS --//

function string2Morse(myString) {
    var outStr = "";
    for (var i = 0; i <= myString.length - 1; i++) {
        console.log(myString[i]);
        outStr += char2Morse(myString[i]);
    };

    return outStr;
}

function char2Morse(character) {
    var outStr;
    var char = character;
    switch (char) {
        case 'a':
            outStr = ".-";
            break;
        case 'b':
            outStr = "-...";
            break;
        case 'c':
            outStr = "-.-.";
            break;
        case 'd':
            outStr = "-..";
            break;
        case 'e':
            outStr = ".";
            break;
        case 'f':
            outStr = "..-.";
            break;
        case 'g':
            outStr = "--.";
            break;
        case 'h':
            outStr = "....";
            break;
        case 'i':
            outStr = "..";
            break;
        case 'j':
            outStr = ".---";
            break;
        case 'k':
            outStr = "-.-";
            break;
        case 'l':
            outStr = ".-..";
            break;
        case 'm':
            outStr = "--";
            break;
        case 'n':
            outStr = "-.";
            break;
        case 'o':
            outStr = "---";
            break;
        case 'p':
            outStr = ".--.";
            break;
        case 'q':
            outStr = "--.-";
            break;
        case 'r':
            outStr = ".-.";
            break;
        case 's':
            outStr = "...";
            break;
        case 't':
            outStr = "-";
            break;
        case 'u':
            outStr = "..-";
            break;
        case 'v':
            outStr = "...-";
            break;
        case 'w':
            outStr = ".--";
            break;
        case 'x':
            outStr = "-..-";
            break;
        case 'y':
            outStr = "-.--";
            break;
        case 'z':
            outStr = "--..";
            break;
        case '1':
            outStr = ".----";
            break;
        case '2':
            outStr = "..---";
            break;
        case '3':
            outStr = "...--";
            break;
        case '4':
            outStr = "....-";
            break;
        case '5':
            outStr = ".....";
            break;
        case '6':
            outStr = "-....";
            break;
        case '7':
            outStr = "--...";
            break;
        case '8':
            outStr = "---..";
            break;
        case '9':
            outStr = "----.";
            break;
        case '0':
            outStr = "-----";
            break;
        default:
            outStr = "";
            break;
    }
    return outStr;
}