//Para acceder al json desde codigo lo vamos hacer a traves del fetch

const json = {}
const url = "/Json/luke.json"
//trabajamos la promeso para que se haga la conexion directa con el fetch
fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
//Lo que se realiza en este pequeño pedazo de codigo es usar al metodo fetch para ir hacia la url
//donde tenemos el fichero de json, esto nos permite mencionar que cuando se ejecute el url
// esperamos una respuesta asignandole una funcion de flecha que esa respuesta se convierta en un json
// y de esa manera mientras esperamos, usamos otro then para indicar que esa data la imprima en la consola
// Para ello usamos nuevamente la funcion de flecha e indicamos que la impresion sea en console.log y dentro de ella ponemos el data.









//Podemos acceder a traves del index.html poniendo un ancla con la ubicacion del json.
//Aqui ponemos a prueba la sintaxis para crear un json con informacion en este caso de Luke Skywalker
//Comentamos todo el codigo para poder acceder de otra manera al JSON.

/*const Luke = {
    name: "Luke",
    surname: "Skywalker",
    lightsaber: 1,
    jedi: true,
    friends: [  "Yoda",
                "Obi-wan", 
                "C3P0",
                "R2D2"
            ],
     family: {
        name: "Leia",
        surname: "Skywalker",
        relation: "Sister",
        
     },
    
     family2:  
     {
        name: "Darth",
        surname: "Vader",
        relation: "Father",
        
     },        

     died: null
}

//console.log(Luke)
// usamos la funcion de json stringify es darle como parametro del objeto Luke. El metodo lo que hara (Al json)
// Es convertir un objeto de js a objeto de TIPO JSON (texto plano)

//const json = JSON.stringify(Luke)
//console.log(json)

//Aqui realizaremos la operacion contraria es decir la de parse.

//const obj = JSON.parse(json)
//console.log(obj)
//Aqui al haber hecho la conversion podemos utilizar las propiedades que deseemos por ejemplo el nombre
//console.log(obj.name)
*/
