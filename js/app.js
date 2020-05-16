const nuevaIncidencia = contadorIncidencias(0);
var idResponsable = 0;

function contadorIncidencias(empezar) {

    var numero = empezar;
    return function () {
        numero++;
        return numero;
    }
}

class Incidencia{
    constructor(descripcion,gravedad,asignada,abierta) {
        
        this.id=nuevaIncidencia();
        this.descripcion=descripcion;
        this.gravedad=gravedad;
        this.asignada= new Responsable(asignada,this.id,idResponsable);
        this.abierta=false;
    }
    
    
    
    asignarResponsable(responsable){
        
        
        this.asignada=responsable;
    }
    
    quitarResponsable(){
        this.asignada=null;
        
    }
    
    cerrarIncidencia(){
        this.abierta=false;
        
    }
    
     abrirIncidencia(){
         this.abierta=true; 
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

