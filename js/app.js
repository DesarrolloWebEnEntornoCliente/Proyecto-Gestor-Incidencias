const nuevaIncidencia = contadorIncidencias(0);
var idResponsable = 0;

function contadorIncidencias(empezar) {

    var numero = empezar;
    return function () {
        numero++;
        return numero;
    }
}

class Incidencia {
    constructor(descripcion, gravedad, asignada = null, abierta) {

        this.id = nuevaIncidencia();
        this.descripcion = descripcion;
        this.gravedad = gravedad;
        this.asignada = new Responsable(asignada, this.id, idResponsable);
        this.abierta = false;
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
        
        if(this.abierta == false){
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
        
         incidencia.asignada=this;
        
    }
    
    quitarIncidencia(objetoIncidencia){
        
        incidencia.asignada=this;
        
    }
}

