window.onload = inicio;
var arrayIncidencias= [];


function inicio() {

    document.getElementById('añadir').addEventListener('click', validacion);
}

function validacion(evento) {

    var incidencia = document.getElementById('incidencia').value;
    
    var gravedad = document.getElementById("gravedad").value;
    
    var responsable = document.getElementById('responsable').value;


    if (incidencia.trim() != "") {
        //Infomación de los datos introducidos a traves de la consola.
        console.log("Incidencia: " + incidencia);
        console.log("Gravedad: " + gravedad);
        console.log("Responsable: " + responsable);

        document.getElementById('errorIncidencia').innerHTML = "";

        //Información de los datos introducidos con un array a traves de la consola, usando objetos.

        var responsables = new Incidencia(incidencia, gravedad, responsable);

        console.log(responsables);
        
        arrayIncidencias.push(responsables);
        

        //vacia los campos
        document.getElementById('incidencia').value = '';
        document.getElementById('responsable').value = '';

    } else {

        document.getElementById('errorIncidencia').innerHTML = "Rellene el campo descripcion";
        console.log("Rellene el campo descripción");
    }

}