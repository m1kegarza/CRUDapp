function add(){
    //Capturar los datos de los inputs
  let desc = document.getElementById("desctxt").value;
  let date = document.getElementById("datetxt").value;
  let time = document.getElementById("timetxt").value;

   // Fuardamos los valores en una variable
  let inputValues = ({
    "desc": desc,
    "date": date,
    "time": time
  })

let datos = JSON.parse(localStorage.getItem('reminders')) ? JSON.parse(localStorage.getItem('reminders')) : []
console.log(inputValues)
datos.push(inputValues)
console.log(datos)
  // Una vez obteniendo los objetos , los convertiremos a strings
 console.log(JSON.stringify(datos))
 localStorage.setItem('reminders', JSON.stringify(datos))
//Guardar los datos en el localstorage

//borrar los elementos del formulario
document.getElementById("desctxt").value = '' ;
document.getElementById("datetxt").value = ''; 
document.getElementById("timetxt").value = ''; 
render()
}

function render(){
    console.log(localStorage.getItem('reminders'));
    let lista = document.getElementById("lista");
    let datos = JSON.parse(localStorage.getItem("reminders")) ? JSON.parse(localStorage.getItem("reminders")) : []
    console.log(datos)
    lista.innerHTML = ''
    datos.forEach(element => {
        console.log(element)
        lista.innerHTML += `
        <p> ${element.desc} </p>
        <p> ${element.date} </p>
        <p> ${element.time} </p>
        `
    });
}

render()

/*function guardar(){
    //Capturar los datos de los inputs
  let nom = document.getElementById("nombretxt").value;
  let apelli = document.getElementById("apellidotxt").value;
  let age = document.getElementById("edadtxt").value;

   // Fuardamos los valores en una variable
  let inputValues = ({
    "nombre": nom,
    "apellido": apelli,
    "edad": age
  })*/

  //Guardar los datos en un array 
  //let datos = new Array(); -> aunque no es tan necesario
  /* Recordemos que localstorage obtiene los valores como cadenas de texto por lo que el JSON.parse convierte las cadenas de texto en 
  JSON (objetos) -> A su vez, añadimos el operador ternario bajo la sintaxis : condicional ? expresion1 : expresion2 */
 /* let datos = JSON.parse(localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : []
  console.log(inputValues)
  datos.push(inputValues)
  console.log(datos)
  // Una vez obteniendo los objetos , los convertiremos a strings
 console.log(JSON.stringify(datos))
 localStorage.setItem('usuarios', JSON.stringify(datos))
//Guardar los datos en el localstorage*/

/*//borrar los elementos del formulario
document.getElementById("nombretxt").value = '' ;
document.getElementById("apellidotxt").value = ''; 
document.getElementById("edadtxt").value = ''; 
render()
}

function render(){
    console.log(localStorage.getItem('usuarios'));
    let lista = document.getElementById("lista");
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    console.log(datos)
    lista.innerHTML = ''
    datos.forEach(element => {
        console.log(element)
        lista.innerHTML += `
        <p> ${element.nombre} </p>
        <p> ${element.apellido} </p>
        <p> ${element.edad} </p>
        `
    });
}

render()*/