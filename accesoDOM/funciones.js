// 1. Captura de elementos (El enfoque clásico)
const formulario = document.querySelector('#form-tareas');
const inputTarea = document.querySelector('#input-titulo');
const listaContenedor = document.querySelector('#lista-tareas');

// 2. Escuchar eventos del usuario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue (Vital en Single Page Applications)
  
  const textoTarea = inputTarea.value.trim();
  if (!textoTarea) return;

  // 3. Creación y manipulación dinámica del DOM
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = textoTarea;
  nuevoItem.classList.add('item-tarea');
  nuevoItem.classList.add('sombreado'); // Aplicar estilos CSS

  // 4. Inyección en el árbol HTML
  listaContenedor.appendChild(nuevoItem);

  // Limpiar el formulario
  inputTarea.value = '';
});