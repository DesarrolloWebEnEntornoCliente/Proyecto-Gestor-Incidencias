//Funcion getJSON con promesas, que obtiene los datos del fichero db.json  a traves de URL  y metodo GET
function getJSON(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.ontimeout = function () {
            reject('timeout')
        };
        xhr.open('get', url, true);
        xhr.send();
    });
}

//Envia la incidencia añadida a  db.json 
function sendJSON(url, incidencia) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                
                console.log('Check1');
            }
            else {
                
                console.log('Check2');
            }
        }

    }
    xhr.ontimeout = function () {

        console.log("xhr.timeout");
    }
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(incidencia));
}

//Borra la incidencia del db.json con el id especificado
function deleteJSON(url) {
    var xhr= new XMLHttpRequest();
    xhr.timeout=2000;
    xhr.onreadystatechange = function (e){
        if (xhr.readyState === 4) {
            if (xhr.status === 200){
                console.log('Check1');
            } else{
                console.log('Check2');
            }
        }
    }
    
    xhr.ontimeout = function(){
        console.log('xhr.timeout');
    }
    
    xhr.open('delete',url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}
//Actualiza la incidencia asignada del db.json
function updateJSON(url,incidencia) {
    var xhr= new XMLHttpRequest();
    xhr.timeout=2000;
    xhr.onreadystatechange = function (e){
        if (xhr.readyState === 4) {
            if (xhr.status === 200){
                console.log('Check1');
            } else{
                console.log('Check2');
            }
        }
    }
    
    xhr.ontimeout = function(){
        console.log('xhr.timeout');
    }
    
    xhr.open('put',url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(incidencia));
}

