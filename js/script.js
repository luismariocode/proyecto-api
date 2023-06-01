
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
    const nss = document.getElementById('nss').value;
    const fechaIng = document.getElementById('fechaIng').value;
    const sexo = document.getElementById("sexo").value;
    const combo= document.getElementById("combo").value;


    comboSexo.addEventListener("change", function() {    
      var seleccionado = comboSexo.value;
    });

    console.log(nss);
    console.log(fecha_ing);
    //verificar 
    
    
    // Construir el objeto JSON
    const data = {
      nss: nss,
      fecha_ing: fecha_ing,
      sexo: seleccionado,
    

    };
    //activar el input edad del conyuge si se selecciona la opcion de casado
  

 // Enviar el JSON al servidor
    fetch('url-del-servidor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
  });     
  
  
  