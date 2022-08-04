let dolar = 138.6
const dolar_div = document.getElementById("dolar");
var inputN = document.getElementById("valor")
var result = document.getElementById("result-function")
var calcIva = document.getElementById("calc-iva");
var calcAfip = document.getElementById("calc-afip");
var calcPais = document.getElementById("calc-pais");
var calcProvincia = document.getElementById("calc-provincia");
var totalImpuestos = document.getElementById("total-impuestos");
var impuestoProvincia = document.getElementById("impuesto-provincia");
var provincia = 0
var provinciaSeleccionada = document.getElementById("boton");

function myFunction(){
   document.getElementById("myDropdown").classList.toggle("show");
}

 window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')){
             openDropdown.classList.remove('show');
         }
      }
   }
}

function caba(){
   provincia = 0.02;
   impuestoProvincia.innerHTML ="2.0";
   provinciaSeleccionada.innerHTML = "Buenos Aires o CABA";
   
}
function chaco(){
   provincia = 0.02;
   impuestoProvincia.innerHTML ="2.0";
   provinciaSeleccionada.innerHTML = "Chaco";
}

function cordoba(){
   provincia = 0.03;
   impuestoProvincia.innerHTML ="3.0";
   provinciaSeleccionada.innerHTML = "Córdoba";
}
function pampa(){
   provincia = 0.01;
   impuestoProvincia.innerHTML ="1.0";
   provinciaSeleccionada.innerHTML = "La Pampa";
}
function neuquen(){
   provincia = 0.03;
   impuestoProvincia.innerHTML ="3.0";
   provinciaSeleccionada.innerHTML = "Neuquén";
}
function rio(){
   provincia = 0.05;
   impuestoProvincia.innerHTML ="5.0";
   provinciaSeleccionada.innerHTML = "Rio Negro";
}
function salta(){
   provincia = 0.036;
   impuestoProvincia.innerHTML ="3.6";
   provinciaSeleccionada.innerHTML = "Salta";
}
function ninguna(){
   provincia = 0.00;
   impuestoProvincia.innerHTML ="0.0";
   provinciaSeleccionada.innerHTML = "Ninguna de las anteriores";
}




function calculo() {
   result.innerHTML = (Math.round(inputN.value*(1.21+ 0.45 + 0.08 + provincia)*100)/100).toLocaleString('es-AR');   
   totalImpuestos.innerHTML = (Math.round(((inputN.value*(0.21+0.45+0.08)))*100)/100).toLocaleString('es-AR');
   calcIva.innerHTML = (Math.round((inputN.value*(0.21))*100)/100).toLocaleString('es-AR');
   calcAfip.innerHTML = (Math.round((inputN.value*(0.45))*100)/100).toLocaleString('es-AR');
   calcPais.innerHTML = (Math.round(inputN.value*(0.08)*100)/100).toLocaleString('es-AR');
   calcProvincia.innerHTML = (Math.round(inputN.value*(provincia)*100)/100).toLocaleString('es-AR');
}

