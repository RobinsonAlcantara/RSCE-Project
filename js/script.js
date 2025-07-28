//Selectores
const hamburguer = document.querySelector("#hamburguer");
const enlaces = document.querySelector(".nav-links");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const telefonoInput = document.querySelector("#telefono");
const formulario = document.querySelector("#formulario");

document.addEventListener("DOMContentLoaded",()=>{

    hamburguer.addEventListener("click", ()=>{
    enlaces.classList.toggle("show");
    hamburguer.classList.toggle("hamburguer-active");
    })

    formulario.addEventListener("submit",e => {
        e.preventDefault();
        
        //validando
        validarFormulario();

        //Aqui se continua para enviar los datos

    })

})

function validarFormulario(){
    const inputs = [fechaInput.value, horaInput.value,nombreInput.value,apellidoInput.value,emailInput.value,telefonoInput.value];
    
    if(inputs.includes("")){
        crearAlerta("No se permiten campos vacios","error");
        return;
    }
}


function crearAlerta(mensaje, tipo){

    if(!document.querySelector(".alerta")){
        const alertaDiv = document.createElement("DIV");
        alertaDiv.textContent = mensaje;
        alertaDiv.classList.add("alerta",tipo)

        formulario.parentElement.insertBefore(alertaDiv,formulario);

        setTimeout(()=>{
            alertaDiv.remove();
        }, 3000)
    }
    
    
}
