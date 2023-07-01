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

 //Funcion validar fecha entre  el 01/01/2008 y mañana
    function handleValidarSemanas(input) {
            
            console.log(input.value);
            input.max = 2600;
            input.min = 0;
            
            if (input.value < input.min || input.value > input.max) {
                
                input.classList.remove("border-gray-300") ;
            input.classList.remove("border-green-300") ;
            input.classList.add("border-red-500");
            }else{
                input.classList.remove("border-gray-300") ;
                input.classList.remove("border-red-500");
                input.classList.add("border-green-300") ;
            }

    }


    function handleValidarFecha(input) {

        const fechaIngresada = input.value;

        const inputLimits = document.getElementById("fechaIng");
        inputLimits.max = new Date().toISOString().split("T")[0];
        inputLimits.min = "2008-01-01";
        
        if (fechaIngresada < inputLimits.min || fechaIngresada > inputLimits.max) {
            
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-green-300") ;
            input.classList.add("border-red-500");
        }else{
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-red-500");
            input.classList.add("border-green-300") ;
        }
    };
    
    function handleValidarEdad (input) {
        console.log(input.value);
        input.max = 100;
        input.min = 15;
        
        if (input.value < input.min || input.value > input.max) {    
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-green-300") ;
            input.classList.add("border-red-500");
        }else{
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-red-500");
            input.classList.add("border-green-300") ;
        }
    }

    function handleValidarSelected(input){
        if(input.value == "Selecciona una opción"){
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-green-300") ;
            input.classList.add("border-red-500");
        }else{
            input.classList.remove("border-gray-300") ;
            input.classList.remove("border-red-500");
            input.classList.add("border-green-300") ;
        }
    }

  