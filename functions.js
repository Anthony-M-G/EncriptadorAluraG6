


function asignarTexto_elemento(elemento,texto){ // Función para llamar cada elemento en una variabe a partir de una funcion sin hacer pasos repetitivos
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function llamadaElementoID(id) { // Función para traer cada elemento por su id en html
    let elementoID=document.getElementById(id);
    return elementoID
}

function encriptar(){
    let result=[]; //Lista vacia donde se almacenan los valores cambiados
    listaDePalabra=entrada_texto.value.toLowerCase().split(""); //Divido la palabra en una lista
    for(i=0;i<listaDePalabra.length;i++){
       switch (listaDePalabra[i]) { //Sentencia switch para los casos en los que aprezca una vocas
        case "a":                   // Dependiendo de la vocal agrego el cambio a la lista result
            result.push("ai");
            break;
        case "e":
            result.push("ei");
            break;
        case "i":
            result.push("imes");
            break;
        case "o":
            result.push("ober");
            break;
        case "u":
            result.push("ufat");
            break;

        default:
            result.push(listaDePalabra[i]); // Si no es ninguna vocal se añade la misma letra en la posicion correspondiente
            break;
       }
    }
    limpiarPantalla(); 
    salida_texto.value=result.join("");
    return salida_texto.value;
}
function desencriptar(){ // Funcón que actualiza la palabra a desencriptar en funciona de cada letra, asignándole el texto traido del textarea a la variable res

    let res=entrada_texto.value.toLowerCase().replace(/ai/g,"a");
    res=res.replace(/ei/g,"e");
    res=res.replace(/imes/g,"i");
    res=res.replace(/ober/g,"o");
    res=res.replace(/ufat/g,"u");
    salida_texto.value=res  ;
    limpiarPantalla();      
    return salida_texto.value;
    }

function limpiarPantalla(){
    entrada_texto.value="";
}
function copiar(){
    let copy=salida_texto.value;
    salida_texto.value="";
    entrada_texto.value=copy;
}


// LLamada de elementos por las funciones
let entrada_texto=llamadaElementoID("texto_entrada");
let salida_texto=llamadaElementoID("texto_salida");







