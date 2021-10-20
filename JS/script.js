var nombreInput = document.querySelector("#nombre")
var apellidoInput = document.querySelector("#apellido")
var emailInput = document.querySelector("#email")
var tlfInput = document.querySelector("#telefono")
var btn = document.querySelector(".btn")
var btnVerificar = document.querySelector(".verificar")

/* Evento para habilitar el boton de enviar*/
btnVerificar.addEventListener("click", function(){
    VerificatorStr(nombreInput)
    VerificatorStr(apellidoInput)
    VerificacionTlf(tlfInput)
    VerificacionEmail(emailInput)
    if(VerificatorStr(nombreInput)&& VerificatorStr(apellidoInput) && VerificacionTlf(tlfInput) && VerificacionEmail(emailInput)){
        btn.removeAttribute("disabled")
    }
})

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
            /* Decirle que todo esta perfecto con ese input y devuelve true*/
            input.classList.remove("notValid")
            input.classList.add("isValid")
            return true

        }
        else{
            /* Hace el cambio del error y devuelve false*/
            input.classList.add("notValid")
            return false
        }
    }
    else{
        /* Hace el cambio del error y devuelve false*/
        input.classList.add("notValid")
        return false
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
                break
            }
        }
        /* Si todo esta bien devuelve true*/
        if(error == 0){
            console.log("Todo correcto")
            input.classList.remove("notValid")
            input.classList.add("isValid")
            return true
        }
    }
    else{
        /* Si algo esta mal devuelve false*/
        input.classList.add("notValid")
        return false
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
    inputVacio(input)
    valor = input.value
    /* Verificacion de @*/ 
    cantidad = 0
    for (let i = 0; i < valor.length; i++) {
        if(valor[i] == "@"){
            cantidad += 1
        }
    }
    /* Separar el email desde el @ para verificar luego sus datos*/
    if(cantidad > 1 || error == 1){
        console.log("Lamentablemente tienes mas de 1 @ en su email. o esta vacio")
        validacion = false
        input.classList.add("notValid")
    }
    else{
        arrayEmail = valor.split("@")
        nick = arrayEmail[0]
        terminacion = arrayEmail[1].split(".")
        validacion = true
        console.log("Todo Perfecto")
    }
    /* Verificacion del nick del email EJ elifbaque*/
    if(validacion == true){
        for (let i = 0; i < nick.length; i++) {
            if(nick[i].toUpperCase().charCodeAt(0) > 64 && nick[i].toUpperCase().charCodeAt(0) < 91){
                nickCompleto = true
            } 
            else if(!(isNaN(parseInt(nick[i]))) || nick[i] == "."){
                nickCompleto = true
            }
            else{
                input.classList.add("notValid")
                nickCompleto = false
                break
            }
        }
        /* Verificacion de la terminacion Gmail hotmail etc si es solo letras */ 
        for (let i = 0; i < terminacion[0].length; i++) {
            if(terminacion[0][i].toUpperCase().charCodeAt(0) > 64 && terminacion[0][i].toUpperCase().charCodeAt(0) < 91){
                terminacionUno = true
            }
            else{
                input.classList.add("notValid")
                terminacionUno = false
                break
            }  
        }
        if(nickCompleto == true && terminacionUno == true){
            if((terminacion[1] == "com" || terminacion[1] == "ar") || terminacion[1] == "com" && terminacion[2] == "ar"){
                terminacionDos = true
            }
            else{
                input.classList.add("notValid")
                terminacionDos = false
            }
        }
        else{
            return false
        }
        /* Verificacion si la terminacion es com o ar,com.ar*/
        if(nickCompleto == true && terminacionUno == true && terminacionDos == true){
            console.log("Todo el email esta perfecto")
            input.classList.remove("notValid")
            input.classList.add("isValid")
            return true 
        }
        else{
            input.classList.add("notValid")
            return false
        }
    }  
}
