/*
    Programado por Luis Tapia
  ____          _____               _ _           _       

*/
const RUTA_SERVIDOR = "./webapi";
const HTTP = {
    "post": (ruta, datos) =>
        fetch(RUTA_SERVIDOR + ruta, {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
    ,
    "put": (ruta, datos) =>
        fetch(RUTA_SERVIDOR + ruta, {
            credentials: 'include',
            method: "PUT",
            body: JSON.stringify(datos)
        })
            .then(r => r.json())
    ,
    "get": (ruta) =>
        fetch(RUTA_SERVIDOR + ruta, {
            credentials: 'include',
        })
            .then(r => r.json())
    ,
    "delete": (ruta) =>
        fetch(RUTA_SERVIDOR + ruta, {
            credentials: 'include',
            method: "DELETE",
        })
            .then(r => r.json())
};