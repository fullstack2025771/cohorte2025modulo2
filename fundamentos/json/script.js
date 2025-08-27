//eSTANDAR-> ECMAScript 6
/*
const btn =document.getElementById('btn-info')
btnInfo.addEventListener*/




const cargarInformacion = async () => {
    try {
        const respuesta = await fetch('../json/persona.json');
        const persona = await respuesta.json();
        console.log("persona obtenida", persona)
        mostrarInformacion(persona);
    } catch (error) {
        console.log('Hubo un error inesperado: ', error)
        alert('Hubo un error inesperado, intente mas tarde');
    }

}
const cargarApi = async () => {
    try {
        const respuesta = await fetch('https://ghibliapi.vercel.app/films');
        const peliculas = await respuesta.json();
        console.log('peliculas obtenidas', peliculas);
    } catch (error) {
        console.error('Hubo un error inesperado: ', error);
        alert('Hubo un error inesperado, intente mas tarde');

    }
}

const mostrarInformacion = (persona) => {
    console.log('Vamos a construir un html');

    const contenedor = document.getElementById('datos');
    contenedor.innerHTML = `
           <div class="info"> 
     
             <h2 class="nombre">${persona.nombre}</h2
                <p class="miEdad">Edad: ${persona.edad}</p>
           </div>
                <div class="misHobbies">
                <ul>
                    <h3>Mis Hobbies</h3>
                    <li>Jugar baloncesto</li>
                    <li>Natacion</li>
                    <li>Jugar video juegos</li>
                 </ul>
                </div>
`
}

