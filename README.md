# Instalacion json-server en el directorio:

**npm install -g json-server**

Crear un fichero

**db.json**

que sera el fichero que nos dara datos y los cambiaremos en el:
```
{
  "Incidencia": [
    {
      "descripcion": "Responsable1",
      "gravedad": "Baja",
      "asignada": {
        "nombre": "Responsable1",
        "idResp": 1
      },
      "abierta": true,
      "id": 1
    },
    {
      "descripcion": "Responsable2",
      "gravedad": "Media",
      "asignada": {
        "nombre": "Responsable1",
        "idResp": 2
      },
      "abierta": true,
      "id": 2
    },
    {
      "descripcion": "Responsable 3",
      "gravedad": "Alta",
      "asignada": {
        "nombre": "Responsable1",
        "idResp": 3
      },
      "abierta": true,
      "id": 3
    }
  ]
}
```

## Inicializar JSON-SERVER

**json-server --watch db.json**

Todos los cambios realizados se guardaran en **db.json**

Para obtener los datos:  http://localhost:3000/Incidencia 
