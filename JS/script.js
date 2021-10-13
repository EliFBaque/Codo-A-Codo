var nombreInput = document.querySelector("#nombre")
var apellidoInput = document.querySelector("#apellido")
var emailInput = document.querySelector("#email")
var dirInput = document.querySelector("#direccion")
var btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    valor = emailInput.value
    console.log(valor.split("@"))
    // Preguntar al Profesor
}) 