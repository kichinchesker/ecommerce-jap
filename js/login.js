//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
    document.getElementById("signIn").onclick = function(e) {
        sessionStorage.setItem('key', document.getElementById("usuario").value);
        // Punto 3 Entrega 2
    }

});