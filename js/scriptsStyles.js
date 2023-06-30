 // Obtener referencias a los elementos del DOM
 const buttonAntecedentes = document.getElementById("button-antecedentes");
 const buttonNormativa = document.getElementById("button-normativa");
 const textAntecedentes = document.getElementById("text-antecedentes");
 const textNormativa = document.getElementById("text-normativa");

 // Función para mostrar los antecedentes y ocultar la normativa
 function mostrarAntecedentes() {
   textAntecedentes.classList.remove("hidden");
   textAntecedentes.classList.add("block");
   textNormativa.classList.add("hidden");
   textNormativa.classList.remove("block");
   buttonAntecedentes.classList.remove("bg-yellow-200");
   buttonAntecedentes.classList.add("bg-yellow-300");
   buttonNormativa.classList.remove("bg-yellow-300");
    buttonNormativa.classList.add("bg-yellow-200");
 }

 // Función para mostrar la normativa y ocultar los antecedentes
 function mostrarNormativa() {
    textAntecedentes.classList.remove("block");
   textAntecedentes.classList.add("hidden");
   textNormativa.classList.add("block");
   textNormativa.classList.remove("hidden");
   buttonAntecedentes.classList.remove("bg-yellow-300")
    buttonAntecedentes.classList.add("bg-yellow-200");
   buttonNormativa.classList.add("bg-yellow-300");
   buttonNormativa.classList.remove("bg-yellow-200 ");
   
//    ;
//    buttonAntecedentes.classList.remove("bg-yellow-200");
 }

 // Asignar los manejadores de eventos a los botones
 buttonAntecedentes.addEventListener("click", mostrarAntecedentes);
 buttonNormativa.addEventListener("click", mostrarNormativa);

  // Obtener referencia al elemento del DOM
  const inputMoneda = document.getElementById("sueldoCot");

  // Función para formatear el valor como moneda con separador de miles
  function formatearMoneda(valor) {
    // Eliminar cualquier caracter que no sea un dígito o un punto decimal
    valor = valor.replace(/[^\d.]/g, "");
    
    // Separar la parte decimal de la parte entera
    const partes = valor.split(".");
    let parteEntera = partes[0];
    let parteDecimal = partes[1] || "";
    
    // Agregar separadores de miles a la parte entera
    parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Unir la parte entera y la parte decimal con el punto decimal
    valor = parteEntera + (parteDecimal.length ? "." + parteDecimal : "");
    
    return valor;
  }

  // Función para actualizar el valor formateado mientras el usuario escribe
  function actualizarValor() {
    inputMoneda.value = formatearMoneda(inputMoneda.value);
  }

  // Asignar el manejador de eventos al campo de entrada
  inputMoneda.addEventListener("input", actualizarValor);
