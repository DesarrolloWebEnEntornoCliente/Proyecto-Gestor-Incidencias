window.onload = inicio;
var arrayIncidencias = [];



function inicio() {

    //Evento que afecta al boton añadir, este llama una función que valida el formulario
    document.getElementById('añadir').addEventListener('click', validacion);

    //Evento que afecta al checkbox mostrar incidenciasCerradas
    document.getElementById('incidenciasCerradas').addEventListener('click', mostrar);



}

function validacion(evento) {

    //Recogida de datos en el formulario
    var incidencia = document.getElementById('incidencia').value;

    var gravedad = document.getElementById("gravedad").value;

    var responsable = document.getElementById('responsable').value;


    //Si el campo descripcion es distinto de vacio
    if (incidencia.trim() != "") {
        //Infomación de los datos introducidos a traves de la consola.
        console.log("Incidencia: " + incidencia);
        console.log("Gravedad: " + gravedad);
        console.log("Responsable: " + responsable);

        //Deja el label de error vacio tras la comprobación
        document.getElementById('errorIncidencia').innerHTML = "";

        //Información de los datos introducidos con un array a traves de la consola, usando objetos.

        var responsables = new Incidencia(incidencia, gravedad, responsable);

        responsables.abrirIncidencia();

        console.log(responsables);

        arrayIncidencias.push(responsables);


        //Lista las incidencias que hay en el array mediante DOM
        listarDOM(arrayIncidencias);



        //vacia los campos
        document.getElementById('incidencia').value = '';
        document.getElementById('responsable').value = '';


    } else {

        //Mensaje de error cuando el campo descripcion obligatorio esta vacio

        document.getElementById('errorIncidencia').innerHTML = "Rellene el campo descripcion";
        console.log("Rellene el campo descripción");
    }

}

function mostrar() {
    //Muestra las incidencias cerradas cuando el checkbox esta activo
    listarDOM(arrayIncidencias);
}

function listarDOM(arrayIncidencias) {
    //Comprobación del estado checkbox
    var cerrado = document.getElementById('incidenciasCerradas').checked;

    document.getElementById('mostrar').innerHTML = '';

    console.log(arrayIncidencias);


    arrayIncidencias.forEach(elemento => {

        //Tan solo añade las incidencias que tengan estado abierto true. En caso que el checkbox este activo muestra las incidencias cerradas
        if (elemento.abierta || cerrado) {

            document.getElementById('mostrar').appendChild(elemento.creacionDom());
        }
    });

}

function borrarIncidencia(evento) {

    //Busca la incidencia en el array

    let idDiv = evento.target.parentElement.getAttribute("data_incidencia");

    let incidencia = arrayIncidencias.find(i => i.id == idDiv);
    //Borra la incidencia del DOM
    borrarIncidenciaDOM(evento);
    //Borra la incidencia del array
    eliminarIncidencia(arrayIncidencias, incidencia);
}

function cerrarIncidencia(evento) {

    //Obtencion del data_incidencia de cada incidencia
    let idDiv = evento.target.parentElement.getAttribute("data_incidencia");

    let incidencia = arrayIncidencias.find(i => i.id == idDiv);
    
    //Asigna la incidencia a false
    incidencia.abierta = false;

    borrarIncidenciaDOM(evento);

    actualizarIncidencia(arrayIncidencias, incidencia);
    
}

function borrarIncidenciaDOM(evento) {
   
    //Borra el contenido en el DOM
    evento.target.parentElement.remove();
}

function actualizarIncidencia(arrayIncidencias, incidencia) {

    //Busca la posición de la incidencia del array, y la sustituye.

    arrayIncidencias.splice(arrayIncidencias.findIndex(i => i.id == incidencia.id), 1, incidencia);

    listarDOM(arrayIncidencias);
}

function eliminarIncidencia(arrayIncidencias, incidencia) {
   
    //Elimina la incidencia
    arrayIncidencias.splice(arrayIncidencias.findIndex(i => i.id == incidencia.id), 1);
}

function abrirIncidencia(evento) {
    
    let idDiv = evento.target.parentElement.getAttribute("data_incidencia");

    let incidencia = arrayIncidencias.find(i => i.id == idDiv)

    //Asigna la incidencia a true
    incidencia.abrirIncidencia();
    
    //Actualiza el estado de la incidencia
    actualizarIncidencia(arrayIncidencias, incidencia);
    
    listarDOM(arrayIncidencias);

}
