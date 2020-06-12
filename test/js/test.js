var expect = chai.expect;
chai.should();  

describe('Pruebas ejemplo 1', () => {

 beforeEach (function () {
  
     incidencia = new Incidencia("Incidencia 1","Baja","");
    
  });

  it('cerrarIncidencia', () => {
    
      incidencia.cerrarIncidencia()
      expect(incidencia.abierta).to.be.false;
      
  });
    
    it('abrirIncidencia', () => {
    
      incidencia.abrirIncidencia()
      expect(incidencia.abierta).to.be.true;
      
  });
    
    it('asignarResponsable', () => {
    
      incidencia.asignarResponsable("Prueba1");
        
      expect(incidencia.asignada).to.eql("Prueba1");
      
      
  });
    
    it('quitarResponsable', () => {
    
      incidencia.quitarResponsable();
        
      expect(incidencia.asignada).to.eql(null);
      
      
  });
    
});





