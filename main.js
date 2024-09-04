////////////////////////PRIMER INTENTO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
// const btnGuardar = document.getElementById("btnName");
// const nombreRegistrado = document.getElementById("nombreForm");





// btnGuardar.addEventListener("click", function (event) {
//     event.preventDefault
//     localStorage.setItem("nombre", nombreRegistrado)

// })


// document.addEventListener('DOMContentLoaded', function() {

//     const nombreGuardado = localStorage.getItem('nombreForm');
    
//     if (nombreGuardado) {
//         document.getElementById('nombreGuardado').textContent = nombreGuardado;
//     } else {
//         document.getElementById('nombreGuardado').innerHTML = '<h1>Por favor, ve a <a href="./index.html">Home</a> e ingresa tu nombre</h1>';
//     }
// });

///////////////////////////////////SEGUNDO INTENTO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const btnGuardar = document.getElementById("btnName");
// const txtNombre = document.getElementById("nombreForm")
// const nombreGuardado = localStorage.getItem('nombreForm');
// //Funciona guardar en localstorage
// btnGuardar.addEventListener("click", function (event) {
//            event.preventDefault
//            localStorage.setItem("nombre", txtNombre)
// }
// )
// //////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {

    
// if (nombreGuardado) {

//  document.getElementById('nombreGuardado').innerText = `Hola ${txtNombre}, bienvenidx de nuevo`;
// } else {
// document.getElementById('nombreGuardado').innerHTML = '<h1>Por favor, ve a <a href="./index.html">Home</a> e ingresa tu nombre</h1>';
// }
// });


/////////////////////////TERCER INTENTO CON JC///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const btnGuardar = document.getElementById("btnName")
const txtNombre = document.getElementById("nombreForm")
const alertValidaciones = document.getElementById("botonAlerta")
btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    if (txtNombre.value.length<3) {
        
    }
    
})