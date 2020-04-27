window.onload = inicio;

function inicio() {

    document.getElementById('añadir').addEventListener('click', validacion);
}

function validacion(evento) {

    var incidencia = document.getElementById('incidencia').value;
    var gravedad = document.getElementById("gravedad").value;
    var responsable= document.getElementById('responsable').value;
    
    



    if (incidencia.trim() != "") {
        console.log("Incidencia: "+incidencia);
        console.log("Gravedad: "+gravedad);
        console.log("Responsable: "+responsable);
        document.getElementById('incidencia').value='';
        document.getElementById('responsable').value='';
        
        
        
        

    } else {
        document.getElementById('errorIncidencia').innerHTML = "Rellene el campo descripcion";
        console.log("Rellene el campo descripción");
    }
    
    
    





}