const nuevaIncidencia = contadorIncidencias(0);
var idResponsable = 1;

function contadorIncidencias(empezar) {

    var numero = empezar;
    return function () {
        numero++;
        return numero;
    }
}

class Incidencia {
    constructor(descripcion, gravedad, asignada, abierta,id) {

        this.descripcion = descripcion;
        this.gravedad = gravedad;
        this.asignada = new Responsable(asignada, this.id, idResponsable);
        this.abierta = true;
        this.id = nuevaIncidencia();
    }



    asignarResponsable(responsable) {


        this.asignada = responsable;
    }

    quitarResponsable() {
        this.asignada = null;

    }

    cerrarIncidencia() {
        this.abierta = false;

    }

    abrirIncidencia() {
        this.abierta = true;
    }

    //
    creacionDom(objetoIncidencia) {
        
        
        let div = document.createElement('div');

        
        let incidencia = document.createElement('h2');
        incidencia.innerHTML ="Incidencia: "+this.descripcion;
        div.appendChild(incidencia);

        let gravedad = document.createElement('p');
        gravedad.innerHTML = "Gravedad: "+this.gravedad;

        div.appendChild(gravedad);

        let responsable = document.createElement('p');
        responsable.innerHTML = "Responsable: "+this.asignada.nombre;
        div.appendChild(responsable);
        
        let botonCerrar = document.createElement('button');
        botonCerrar.innerHTML = "Cerrar";
        botonCerrar.setAttribute('class', 'cerrar')
        botonCerrar.addEventListener('click', cerrarIncidencia);
        
        div.appendChild(botonCerrar);
        
        
         let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.setAttribute('class', 'eliminar')
        botonEliminar.addEventListener('click', borrarIncidencia);
        
        div.appendChild(botonEliminar);
        
        
        //Boton abrir que aparece en las incidencias cerradas.
        if (!this.abierta) {
            botonCerrar.style.display="none";
            let botonAbrir = document.createElement('button');
            botonAbrir.innerHTML = "Abrir";
            botonAbrir.setAttribute('class', 'Abrir')
            botonAbrir.addEventListener('click', abrirIncidencia);

            div.appendChild(botonAbrir);

        }
        
        div.setAttribute('data_incidencia', this.id);


        


        return div;
    }
       
}

class Responsable{
    constructor(nombre,idInc,idResp) {
        
        this.nombre=nombre;
        this.idInc=idInc;
        this.idResp=idResponsable++;
    }
    
    asignarIncidencia(objetoIncidencia){
        
         objetoIncidencia.asignada=this;
        
    }
    
    quitarIncidencia(objetoIncidencia){
        
        objetoIncidencia.asignada=this;
        
    }
}

