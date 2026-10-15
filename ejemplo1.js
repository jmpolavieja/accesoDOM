let usuarioLogueado = true;

if (usuarioLogueado) {
  const tokenTemporal = "XYZ123";
  var tokenAntiguo = "ABC987"; // ❌ Enfoque antiguo perjudicial
  console.log(tokenTemporal); //  Funciona dentro del bloque
}

console.log(tokenAntiguo);   // ⚠️ ¡Funciona! var se "escapa" del bloque if (Peligroso).
// console.log(tokenTemporal);  // ❌ Error: tokenTemporal no está definido fuera del bloque.

// ********************************************

// 1. Sintaxis clásica vs Sintaxis Flecha
function duplicarClasico(numero) {
  return numero * 2;
}
console.log(duplicarClasico(5)); // 10

const duplicarFlecha = (numero) => numero * 2; // Retorno implícito en una línea

// 2. El problema del contexto 'this' (Por qué Angular las necesita)
const componenteReloj = {
  segundos: 0,
  arrancar: function() {
    // Si usáramos una función clásica aquí, 'this' perdería la referencia al objeto
    setInterval(() => {
      this.segundos++; // 'this' apunta correctamente a componenteReloj
      console.log(`Tiempo: ${this.segundos}s`);
    }, 1000);
  }
};
const reloj = Object.create(componenteReloj);
reloj.arrancar(); // Inicia el contador de segundos