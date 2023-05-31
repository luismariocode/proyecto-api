document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    // Capturar los valores ingresados por el usuario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Construir el objeto JSON
    const data = {
      name: name,
      email: email
    };

    
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