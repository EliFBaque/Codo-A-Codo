var nombreInput = document.querySelector("#nombre") /* Listo  falta mostrar el error */
var apellidoInput = document.querySelector("#apellido")/* Listo  falta mostrar el error */
var emailInput = document.querySelector("#email")/* Listo falta mostrar el error */
var tlfInput = document.querySelector("#telefono")/* Listo falta mostrar el error */
var dirInput = document.querySelector("#direccion")/* Listo falta mostrar el error */
var btn = document.querySelector(".btn")




btn.addEventListener("click", function(){

    VerificatorStr(nombreInput)
    VerificatorStr(apellidoInput)
    VerificacionTlf(tlfInput)
    // Ya contestado por profesor
}) 

/* Email verificar que tenga 1 => @ 1 o 2 . y la parte del nick no tenga signos raros */ 
/* Dir un string y un numero o solo 1 string*/
/* tlf q sea solo un numero*/ 


/* Funcion de verificacion de que sea un string completo*/
function VerificatorStr(input){
    inputVacio(input)
    valor = input.value
    /* Verificar que no tenga numeros , ya que es Nombre y Apellido*/
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
    /* Si no es un numero detiene el bucle y pasa al error*/
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
        console.log("Te haz pasado de numeros")
    }
}


/* Funcion Para ver si el string esta vacio*/
function inputVacio(input){
    error = 0
    if(input.value == ""){
       return error += 1
    }
}

/* Funcion para verificacion de email*/

function VerificacionEmail(input){
    valor = input.value
    
    /* Verificacion de @*/ 
    cantidad = 0
    for (let i = 0; i < valor.length; i++) {
        if(valor[i] == "@"){
            cantidad += 1
        }
    }

    /* Separar el email desde el @ para verificar luego sus datos*/
    if(cantidad > 1){
        console.log("Lamentablemente tienes mas de 1 @ en su email.")
        return console.log("error")
    }
    else{
        arrayEmail = valor.split("@")
        nick = arrayEmail[0]
        terminacion = arrayEmail[1].split(".")
        console.log("Todo Perfecto")
    }
    /* Verificacion del nick del email EJ elifbaque*/
    for (let i = 0; i < nick.length; i++) {
        if(nick[i].toUpperCase().charCodeAt(0) > 64 && nick[i].toUpperCase().charCodeAt(0) < 91){
            console.log("Banana")
        } 
        else if(!(isNaN(parseInt(nick[i]))) || nick[i] == "."){
            console.log("es un numero o un .")
        }
    }
    /* Verificacion de la terminacion Gmail hotmail etc si es solo letras */ 
    for (let i = 0; i < terminacion[0].length; i++) {
        if(terminacion[0][i].toUpperCase().charCodeAt(0) > 64 && terminacion[0][i].toUpperCase().charCodeAt(0) < 91){
            console.log("Banana")
        }
        else{
            return console.log("error")
        } 
        
    }
    /* Verificacion si la terminacion es com o ar,com.ar*/
    if((terminacion[1] == "com" || terminacion[1] == "ar") || terminacion[1] == "com" && terminacion[2] == "ar"){
        console.log("ok")
    }
}
