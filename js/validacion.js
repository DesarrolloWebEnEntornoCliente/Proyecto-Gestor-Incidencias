window.onload = inicio;
var arrayIncidencias= [];


function inicio() {

   //Evento que afecta al boton añadir 
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

        //Deja el label de error vacio tras la comprobación
        document.getElementById('errorIncidencia').innerHTML = "";

        //Información de los datos introducidos con un array a traves de la consola, usando objetos.

        var responsables = new Incidencia(incidencia, gravedad, responsable);

        console.log(responsables);
        
        arrayIncidencias.push(responsables);
        

        //vacia los campos
        document.getElementById('incidencia').value = '';
        document.getElementById('responsable').value = '';
        
        listarDOM();

    } else {
        
        //Mensaje de error cuando el campo descripcion obligatorio esta vacio

        document.getElementById('errorIncidencia').innerHTML = "Rellene el campo descripcion";
        console.log("Rellene el campo descripción");
    }

}

function listarDOM(){
    document.getElementById('mostrar').innerHTML = '';
    
    arrayIncidencias.forEach(elemento => {
        document.getElementById('mostrar').appendChild(elemento.creacionDom());
    });
    
}

function borrarIncidencia(evento){
    
    console.log("borrarIncidencia(evento)");
    
    let boton = evento.target;
    let idDiv = boton.parentElement.id;
    var arrayID;

    arrayIncidencias.forEach(elemento => {

        if(idDiv == elemento.id) arrayID = elemento;

    });
    
    
    
    
    arrayIncidencias.splice(arrayIncidencias.indexOf(arrayID), 1);

    boton.parentElement.remove();
    
}

function cerrarIncidenciaDOM(evento){
    
    let boton = evento.target;
    let idDiv = boton.parentElement.id;
    var arrayID;
    
    arrayIncidencias.forEach(elemento => {

        if(idDiv == elemento.id) arrayID = elemento;

    });
    
    arrayID.abierta=false;
    
    
    

    boton.parentElement.remove(); 
    
}


    
    
    
    
