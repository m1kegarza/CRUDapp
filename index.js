function add() {
  //Capturar los datos de los inputs
  let desc = document.getElementById("desctxt").value;
  let fecha = document.getElementById("datetxt").value;
  let hora = document.getElementById("timetxt").value;

  // Guardamos los valores en una variable
  let inputValues = {
    desc: desc,
    fecha: fecha,
    hora: hora,
  };

  let datos = JSON.parse(localStorage.getItem("reminders"))
    ? JSON.parse(localStorage.getItem("reminders"))
    : [];
  console.log(inputValues);
  datos.push(inputValues);
  console.log(datos);

// Una vez obteniendo los objetos , los convertiremos a strings
 console.log(JSON.stringify(datos))
 localStorage.setItem('reminders', JSON.stringify(datos))
//Guardar los datos en el localstorage

//borrar los elementos del formulario
document.getElementById("desctxt").value = '';
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
    datos.forEach((element, index) => {
        console.log(index)
        lista.innerHTML += `
        <p> ${element.desc} </p>
        <p> ${element.fecha} </p>
        <p> ${element.hora} </p>
        <button id="Borrar" onclick="borrar(${index})">Borrar</button>
        `
    });
}

function borrar(position){
let datos = JSON.parse(localStorage.getItem("reminders")) ? JSON.parse(localStorage.getItem("reminders")) : []
  console.log(datos.splice(position, 1))
  console.log(JSON.stringify(datos))
  localStorage.setItem('reminders', JSON.stringify(datos))
  render()
  console.log('borrado')
}

render()