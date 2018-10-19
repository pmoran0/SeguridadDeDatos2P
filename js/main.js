var abcNormal    = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayCifrado = ["☺","☻","♥","♦","♣","♠","•","◘","○","◙","♂","♀","♪","♫","☼","►","◄","↕","‼","¶","§","▬","↨","↑","↓","→"];

function cifrado(){
    var str = document.getElementById("textCifrar").value;
    var minusculas = str.toLowerCase();
    var result="";
    var temp="";
    
    for(var i=0; i < str.length; i++)
    {      
        var currentLetter = minusculas[i];
        var currentIndex =  abcNormal.indexOf(currentLetter);
        
        temp += minusculas[i];
        result += arrayCifrado[currentIndex];
    }
    document.getElementById("textResCifrar").value = result;
}

function descifrado(){
    var symbols = document.getElementById("textDescifrar").value;
    var result="";
    var temp="";
    
    for(var i=0; i < symbols.length; i++)
    {      
        var currentSymbol = symbols[i];
        var currentIndex =  arrayCifrado.indexOf(currentSymbol);
        
        temp += symbols[i];
        result += abcNormal[currentIndex];    
    }
    document.getElementById("textResDescifrar").value = result;
}