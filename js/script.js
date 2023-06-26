
//funcion que se usa para habilitar la edad del conyuge  si es que el usuario esta casado
function habilitarInput() {
  var combo = document.getElementById("estadoC");
  var input = document.getElementById("edadCon");
  var label = document.getElementById("lbl-estadoC");
  if (combo.value === "casado") {

    input.hidden = false;
    label.hidden = false
  } else {

    input.hidden = true;
    label.hidden = true

  }
}


function habilitarInputIMSS() {
  var combo = document.getElementById("montoIMSS");
  var input = document.getElementById("saldoIMSS");
  var label = document.getElementById("lb-montoIMSS");
  // var msg = document.getElementsByClassName("msg-montoIMSS");
  if (combo.value === "1") {

    input.hidden = false;
    label.hidden = false
    msg.hidden = false
  } else {

    input.hidden = true;
    label.hidden = true
    msg.hidden=true
  }
}

var estimarIMSS = 0;
var estimarRJP = 0;

function checkBoxClicked() {
  var checkbox = document.getElementById("estimarIMSS");
  var checkbox2 = document.getElementById("estimarRJP");

  var result = checkbox.checked ? 1 : 0;
  var result2 = checkbox2.checked ? 1 : 0;

  estimarIMSS = result;
  estimarRJP = result2;

  // Aquí puedes hacer lo que desees con el resultado
}


//funcion en la ventana de resultados que me divide en 3 botones 

function mostrarResultado(divId) {
  // Oculta todos los resultados
  var resultados = document.getElementsByClassName('resultado');
  for (var i = 0; i < resultados.length; i++) {
    resultados[i].style.display = 'none';
  }

  // Muestra el resultado correspondiente al div seleccionado
  var resultado = document.getElementById(divId);
  resultado.style.display = 'block';
}


// funcion para creear la tabla con el archivo json

function createTable(jsonData) {
  const table = document.createElement('table');

 // Crea la fila de encabezado

  const headerRow = document.createElement('tr');
  for (let key in jsonData[0]) {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Crea las filas de datos

  jsonData.forEach(data => {
    const row = document.createElement('tr');
    for (let key in data) {
      const td = document.createElement('td');
      td.textContent = data[key];
      row.appendChild(td);
    }
    table.appendChild(row);
  });

  // Agrega la tabla al documento HTML

  const tableContainer = document.getElementById('table-container');
  tableContainer.appendChild(table);
}

var semanasCotizadas;


//Esta funcion me mada el contenido de mi JSON a la API

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  const semanasCot = document.getElementById("semanasCot").value
  const fechaIng = document.getElementById("fechaIng").value
  const edadActual = document.getElementById("edadActual").value
  const genero = document.getElementById("sexo").value
  const estadoCiv = document.getElementById("estadoC").value
  const edadCon = document.getElementById("edadCon").value
  const sueldoCot = document.getElementById("sueldoCot").value
  const saldoIMSS = document.getElementById("saldoIMSS").value
  const saldoRJP = document.getElementById("saldoRJP").value
  // const estimarRJP = document.getElementById("estimarRJP").value
  const infonavit = document.getElementById("comboInf").value
  const tasa = document.getElementById("comboTasa").value




  //construimos el objeto json el cual se va enviar a la API con post 

  const data = {
    semanasCot: semanasCot,
    fechaIng: fechaIng,
    edadActual: edadActual,
    genero: genero,
    estadoCiv: estadoCiv,
    edadCon: edadCon,
    sueldoCot: sueldoCot,
    saldoIMSS: saldoIMSS,
    estimarIMSS: estimarIMSS,
    saldoRJP: saldoRJP,
    estimarRJP: estimarRJP,
    infonavit: infonavit,
    tasa: tasa

  }

  console.log(data);


  // Enviar el JSON al servidor

  const url = "http://192.168.1.235:8574/sntssrv.dll/api/rest/tsm/prueba";
  const encoded = encodeURI(url);
  
  axios.get(url)
  .then(response => {
    const data = response.data; // JSON recibido desde la API
    var jsonResultados = JSON.stringify(data);
    // console.log("esta es la informacion que esta procesada",data);

   

    var resultados = JSON.parse(jsonResultados);


    console.log(resultados);
    // Obtener la referencia a la tabla
    var tabla = document.getElementById('resultados-t');
  
    // Recorrer los resultados y agregarlos a la tabla
    for (var clave in resultados) {
      if (resultados.hasOwnProperty(clave)) {
        var resultado = resultados[clave];
        var fila = document.createElement('tr');
    
        var celdaNombre = document.createElement('td');
        celdaNombre.textContent = resultado.Anio;
        fila.appendChild(celdaNombre);
    
        var celdaEdad = document.createElement('td');
        celdaEdad.textContent = resultado.Edad;
        fila.appendChild(celdaEdad);
    
        var celdaEmail = document.createElement('td');
        celdaEmail.textContent = resultado.PenGarIMSS;
        fila.appendChild(celdaEmail);
    
        tabla.appendChild(fila);
      }
    }
    
   
  })


  .catch(error =>  {

    console.error('Error en la solicitud:', error);
    
  });

});
