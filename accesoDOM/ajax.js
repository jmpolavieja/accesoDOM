// Este es el enfoque que usaremos como puente antes de ir a Angular
async function cargarUsuarioAJAX() {
  try {
    // 1. Lanzamos la petición asíncrona a la red
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // 2. Esperamos a transformar el flujo de datos crudos en un objeto JSON usable
    const usuario = await respuesta.json();
    
    // 3. Pintamos en la consola el resultado
    console.log('AJAX con Fetch Moderno:', usuario);

    // 4. Pintamos en el div #uno con los datos del usuario
    const divUno = document.querySelector('#uno');
    divUno.innerHTML = `
    <div class="container">
      <h3>Usuario Cargado:</h3>
      <p><strong>Nombre:</strong> ${usuario.name}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
    </div>
    `;
  } catch (error) {
    console.error('Error al procesar la petición AJAX:', error);
  }
}

/* cargarUsuarioAJAX(); */