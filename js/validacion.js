window.onload = inicio;
//Array donde se almacenan todas las incidencias y sus atributos(id,descripcion,gravedad,responsable)
var arrayIncidencias = [];
var arrayResponsable = ["Responsable1", "Responsable2", "Responsable3"];

function inicio() {
    
    
    //Evento que afecta al boton añadir, este llama una función que valida el formulario
    document.getElementById('añadir').addEventListener('click', validacion);

    //Evento que afecta al checkbox mostrar incidenciasCerradas
    document.getElementById('incidenciasCerradas').addEventListener('click', mostrar);

   //Llama a la funcion getJSON que obtiene los contenidos del fichero db.json, luego se parsea para pasarlo a un objeto y pushearlo al array, por ultimo se lista en DOM.
    getJSON("http://localhost:3000/Incidencia")
        .then(function print(json) {
            let test = JSON.parse(json)
            for (let i = 0; i < test.length; i++) {
                var incidenciaJson = new Incidencia(test[i].descripcion, test[i].gravedad, test[i].asignada.nombre,test[i].abierta);
                incidenciaJson.id = test[i].id;
                incidenciaJson.abierta=test[i].abierta;
                arrayIncidencias.push(incidenciaJson);
            }
      listarDOM(arrayIncidencias);
           
        })
}

function validacion(evento) {
    /*
    Recogida de datos en el formulario
    
    Incidencia: Campo de texto que contiene la  Descripción de una  incidencia, campo obligatorio.
        Si no se rellena salta un error  tanto en la interfaz como en la consola.
    
    Gravedad: Gravedad de la incidencia, campo select con opcion baja(por defecto),media o alta.
    
    Responsable: Campo de texto opcional que contiene el responsable. Puede estar vacio.
    
    */
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
        
        console.log(responsables);

        arrayIncidencias.push(responsables);
        //Mediante la funcion sendJSON envia la URL y la nueva incidencia tipo objeto a db.json
        sendJSON("http://localhost:3000/Incidencia",responsables);


        //Lista las incidencias que hay en el array mediante DOM
        listarDOM(arrayIncidencias);

        //vacia los campos
        document.getElementById('incidencia').value = "";


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
    
    //Vacia el contenido del DOM para quitar duplicados
    document.getElementById('mostrar').innerHTML = '';

    //Recorre el array arrayIncidencias y si se cumple la condición, las muestra.
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

    //Borra la incidencia del DOM.
    borrarIncidenciaDOM(evento);
    //Actualiza el contenido de la incidencia del arrayIncidencias.
    actualizarIncidencia(arrayIncidencias, incidencia);

}

function borrarIncidenciaDOM(evento) {
    //Borra el contenido en el DOM
    evento.target.parentElement.remove();
}

function actualizarIncidencia(arrayIncidencias, incidencia) {
    //Actualiza mediante el metodo updateJSON, que se le pasa la url especifica con la incidencia y la incidencia modificada
    updateJSON("http://localhost:3000/Incidencia/"+incidencia.id,incidencia);

    //Busca la posición de la incidencia del array, y la sustituye.
    arrayIncidencias.splice(arrayIncidencias.findIndex(i => i.id == incidencia.id), 1, incidencia);

    listarDOM(arrayIncidencias);
}

function eliminarIncidencia(arrayIncidencias, incidencia) {
    //
    deleteJSON("http://localhost:3000/Incidencia/"+incidencia.id);
    //Elimina la incidencia, buscando por id.
    arrayIncidencias.splice(arrayIncidencias.findIndex(i => i.id == incidencia.id), 1);
}

function abrirIncidencia(evento) {
    //Obtiene el  numero id de la incidencia que se esta seleccionado
    let idDiv = evento.target.parentElement.getAttribute("data_incidencia");
    //Busca en el array que coincidan los ID del data_incidencia y el propio id del objeto
    let incidencia = arrayIncidencias.find(i => i.id == idDiv)

    //Asigna la incidencia a true
    incidencia.abrirIncidencia();

    //Actualiza el estado de la incidencia
    actualizarIncidencia(arrayIncidencias, incidencia);

    //Vuelve a actualizar la lista
    listarDOM(arrayIncidencias);
}