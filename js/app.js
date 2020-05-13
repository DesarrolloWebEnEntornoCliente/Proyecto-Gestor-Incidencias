var idIncidencia= 0;
var idResponsable= 0;


class Incidencia{
    constructor(descripcion,gravedad,asignada,abierta,id) {
        
        this.id=idIncidencia++;
        this.descripcion=descripcion;
        this.gravedad=gravedad;
        this.asignada=asignada;
        this.abierta=false;
        
        var llamadaObjetoResponsable= new Responsable(asignada,idIncidencia,idResponsable);
    }
    
    asignarResponsable(id,responsable){
        
        
        return arrayIncidencias[id].asignada=responsable;
    }
    
    quitarResponsable(id){
        return arrayIncidencias[id].asignada="";
        
    }
    
    cerrarIncidencia(id){
        return arrayIncidencias[id].abierta=false;
        
    }
    
     abrirIncidencia(id){
         return arrayIncidencias[id].abierta=true; 
    }
       
}

class Responsable{
    constructor(nombre,idInc,idResp) {
        
        this.nombre=nombre;
        this.idInc=idInc;
        this.idResp=idResponsable++;
    }
    
    asignarIncidencia(idInc,responsable){
        
         return arrayIncidencias[idInc].asignada=responsable
        
    }
    
    quitarIncidencia(idInc){
        return arrayIncidencias[idInc].asignada="";
        
    }
}

