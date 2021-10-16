var nombreInput = document.querySelector("#nombre") /* Listo  falta mostrar el error*/
var apellidoInput = document.querySelector("#apellido")/* Listo  falta mostrar el error*/
var emailInput = document.querySelector("#email")/* */
var tlfInput = document.querySelector("#telefono")/* */
var dirInput = document.querySelector("#direccion")/* */
var btn = document.querySelector(".btn")




btn.addEventListener("click", function(){

    // Preguntar al Profesor
}) 



/* Email verificar que tenga 1 => @ 1 o 2 . y la parte del nick no tenga signos raros */ 
/* Dir un string y un numero o solo 1 string*/
/* tlf q sea solo un numero*/ 


/* Funcion de verificacion de que sea un string completo*/
function VerificatorStr(input){
    inputVacio(input)
    valor = input.value
    if(error == 0 && valor.length <= 20){
        for (let i = 0; i < valor.length ; i++){
            if(Number(valor[i]) || valor[i] == "-" || valor[i] == "_"){
                error += 1
                break
            }
        }
        if(error == 0){
            /* Decirle que todo esta perfecto con ese input*/
            console.log("Todo Perfecto")
        }
        else{
            /* Hace el cambio del error*/
            console.log("Lamentablemente hubo un error")
        }
    }
    else{
        /* Hace el cambio del error*/
        console.log("Lamentablemente hubo un error")
    }

}

/* Funcion Input Telefono*/

function VerificacionTlf(input){
    inputVacio(input)
    valor = input.value
    if(valor.length <= 10 && error == 0){
        for (let i = 0; i < valor.length; i++) {
            if(isNaN(parseInt(valor[i]))){
                error = 1
                console.log("Valor no valido")
                break
            }
        }
        if(error == 0){
            console.log("Todo correcto" + error)
        }
    }
    else{
        console.log("Cadena vacia")
    }
}


/* Funcion Para ver si el string esta vacio*/
function inputVacio(input){
    error = 0
    if(input.value == ""){
       return error += 1
    }
}

