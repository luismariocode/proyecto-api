

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


//funcion que me va mandar el contneid del fomrulario en un json
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
   
    //se va verficar si se va realizar con fetch o con axios
  
    // Enviar el JSON al servidor
    fetch('url-del-servidor', {
      method: 'POST',
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
  
  //codigo que se va a verificar que este correcto
  // codigo pára conocer el saldo de la cuenta individual
       //boton 2  
  //codigo que se puede usar para esperar la respuesta del servidor
// ********************************************************************************
   // Envía el JSON al servidor utilizando fetch
//    fetch("URL_DEL_SERVIDOR", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(function(response) {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Error en la respuesta del servidor.");
//   })
//   .then(function(responseJson) {
//     // Aquí puedes procesar los resultados obtenidos del servidor y mostrarlos al usuario
//     console.log(responseJson);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// });


//todo este codigo es para veificarse que este en correcto funcionmiento 
  
  