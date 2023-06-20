

//activar el input edad del conyuge si se selecciona la opcion de casado

function habilitarInput() {
  var combo = document.getElementById("combo");
  var input = document.getElementById("input");

  if (combo.value === "casado") {
    input.disabled = false;
  } else {
    input.disabled = true;
  }
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

    // Capturar los valores ingresados por el usuario

    const semanasCot = document.getElementById('semanasCot').value;
    const fechaIng = document.getElementById('fechaIng').value;
    const fechaNac = document.getElementById('fechaNac').value
    const sexo = document.getElementById("sexo").value;
    const combo= document.getElementById("combo").value;
    const edadC = document.getElementById("input").value;
    const sueldoCot = document.getElementById("sueldoCot").value;
    const saldoInd = document.getElementById("saldoInd").value;
    const infonavit = document.getElementById("comboInf").value;
    const tasa = document.getElementById("comboTasa").value;

    const estimar_uno= document.getElementById("estimar_uno").Checked;
    const estimar_dos= document.getElementById("estimar_dos").Checked;

    var estimarC;    
    // verificar que opcion del chekbox selecciono el usuario
    if (estimar_uno){
      estimar= estimar_uno;
    }
    else{
      estimar = estimar_dos;
    }
    // Construir el objeto JSON asi es e formato del json que se va mandar el servidor con el fetch

    const data = {
      
      semanasCot: semanasCot, //semanas cotizadas ante el IMSS
      fechaIng: fechaIng,     //fecha de ingreso como trabajador del IMSS
      fechaNac: fechaNac,     // fecha de nacimiento 
      genero: sexo,           //genero M , F
      estado : combo,         //estado civil
      edadC : edadC,          // Si se encuenta casa edad del conyuge
      sueldoCot : sueldoCot,  //sueldo con el que cotiza al imss
      saldoInd : saldoInd  ,  //saldo de la cuenta individual
      infonavit : infonavit , //a usado se credito infonavit
      tasa : tasa,            // a que tasa se va a realizar el calculo 
      estimarC: estimar                                                                                                                                                                                                                             //estimar el saldo de tu cuenta individual

    }
    console.log(data);
   
      // semanasCotizadas=semanasCot;
      // document.getElementById("sc").textContent = params.get("semanasCot");

    // Enviar el JSON al servidor
    fetch('http://192.168.1.235:8574/sntssrv.dll/api/rest/tsm/prueba', {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)  
    })
    .then(response => {
        // Manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response);
    })
    .catch(error => {
      // Manejar errores
      console.error('Error:', error);
    });
    
    // window.location.href = "./api/prueba.html";
  });     



 

      // Hacer la distribucion para las tres tablas


      var jsonResultados = "";
      // Parsear el JSON el cual se va dividir en 3 difernetes tablas
      var resultados = JSON.parse(jsonResultados);
      // Obtener la referencia a la tabla
      var tabla = document.getElementById('resultados-total');
      // Recorrer los resultados y agregarlos a la tabla
      resultados.forEach(function (resultado) {
          var fila = document.createElement('tr');

          var celdaEdad = document.createElement('td');
          celdaEdad.textContent = resultado.edad;
          fila.appendChild(celdaEdad);

          var celdaAntiguedad = document.createElement('td');
          celdaAntiguedad.textContent = resultado.Antiguedad;
          fila.appendChild(celdaAntiguedad);

          var celdaSueldoCot = document.createElement('td');
          celdaSueldoCot.textContent = resultado.sueldoCot;
          fila.appendChild(celdaSueldoCot);


          var celdaSaldoInd = document.createElement('td');
          celdaSaldoInd.textContent = resultado.saldoInd;
          fila.appendChild(celdaSaldoInd);

          var celdaRenta = document.createElement('td');
          celdaRenta.textContent = resultado.RentaVital;
          fila.appendChild(celdaRenta);
          tabla.appendChild(fila);
      });


  
  
  