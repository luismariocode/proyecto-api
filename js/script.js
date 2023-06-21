

//activar el input edad del conyuge si se selecciona la opcion de casado

function habilitarInput() {
  var combo = document.getElementById("estadoC");
  var input = document.getElementById("edadCon");
  var label = document.getElementById("lbl-estadoC");
  if (combo.value === "casado") {
  
    input.hidden = false;
    label.hidden = false
  } else {
   
    input.hidden = true;
    label.hidden =true
  
  }
}

var estimarIMSS;
var estimarRJP;
    
function checkBoxClicked() {
  var checkbox = document.getElementById("estimarIMSS");
  var checkbox2 = document.getElementById("estimarRJP");

  var result = checkbox.checked ? 1 : 0;
  var result2 = checkbox2.checked ? 1 : 0;

  estimarIMSS= result;
  estimarRJP=result2; 
  
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





var semanasCotizadas;


//Esta funcion me mada el contenido de mi JSON a la API

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    const semanasCot = document.getElementById("semanasCot").value
    const fechaIng = document.getElementById("fechaIng").value
    const edadActual = document.getElementById("edadActual").value
    const genero = document.getElementById("sexo").value
    const estadoCiv = document.getElementById("estadoC").value
    const edadCon = document.getElementById("edadCon").value
    const sueldoCot = document.getElementById("sueldoCot").value
    const saldoIMSS =document.getElementById("saldoIMSS").value
    const saldoRJP = document.getElementById("saldoRJP").value
    // const estimarRJP = document.getElementById("estimarRJP").value
    const infonavit = document.getElementById("comboInf").value
    const tasa = document.getElementById("comboTasa").value

   


    //construimos el objeto json el cual se va enviar a la API con post 
    
    const data = {
      semanasCot : semanasCot,
      fechaIng: fechaIng,
      edadActual: edadActual,
      genero :genero,
      estadoCiv :estadoCiv,
      edadCon:edadCon,
      sueldoCot:sueldoCot,
      saldoIMSS:saldoIMSS,
      estimarIMSS:estimarIMSS,
      saldoRJP:saldoRJP,
      estimarRJP:estimarRJP,
      infonavit:infonavit,
      tasa:tasa
                                                                                        
    }

    console.log(data);
   
      // semanasCotizadas=semanasCot;
      // document.getElementById("sc").textContent = params.get("semanasCot");

    // Enviar el JSON al servidor
    // fetch('http://192.168.1.235:8574/sntssrv.dll/api/rest/tsm/prueba', {
    //   method: 'GET',
    //   mode: 'no-cors', 
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8'
    //   },
    //   body: JSON.stringify(data)  
    // })
    // .then(response => {
    //     // Manejar la respuesta del servidor
    //   console.log('Respuesta del servidor:', response);
    // })
    // .catch(error => {
    //   // Manejar errores
    //   console.error('Error:', error);
    // });
    
    // window.location.href = "./api/prueba.html";


    //terminacion del submit
  });     



 

      // Hacer la distribucion para las tres tablas


      // var jsonResultados = "";
      // // Parsear el JSON el cual se va dividir en 3 difernetes tablas
      // var resultados = JSON.parse(jsonResultados);
      // // Obtener la referencia a la tabla
      // var tabla = document.getElementById('resultados-total');
      // // Recorrer los resultados y agregarlos a la tabla
      // resultados.forEach(function (resultado) {
      //     var fila = document.createElement('tr');

      //     var celdaEdad = document.createElement('td');
      //     celdaEdad.textContent = resultado.edad;
      //     fila.appendChild(celdaEdad);

      //     var celdaAntiguedad = document.createElement('td');
      //     celdaAntiguedad.textContent = resultado.Antiguedad;
      //     fila.appendChild(celdaAntiguedad);

      //     var celdaSueldoCot = document.createElement('td');
      //     celdaSueldoCot.textContent = resultado.sueldoCot;
      //     fila.appendChild(celdaSueldoCot);


      //     var celdaSaldoInd = document.createElement('td');
      //     celdaSaldoInd.textContent = resultado.saldoInd;
      //     fila.appendChild(celdaSaldoInd);

      //     var celdaRenta = document.createElement('td');
      //     celdaRenta.textContent = resultado.RentaVital;
      //     fila.appendChild(celdaRenta);
      //     tabla.appendChild(fila);
      // });


  
  
  