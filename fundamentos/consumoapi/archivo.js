// }
   function traerDatos(done){
    const result=fetch('https://ghibliapi.vercel.app/films');
    result 
    .then(response=>response.json()) 
    .then(data=>{
        done(data)
    }); 
   }
   traerDatos(data=>{
    data.forEach(pelicula => { 
        const article=document.createRange().createContextualFragment(` 
         <article>
            <article>
            <div class="imagen-container">
                <img src="${pelicula.image}" alt="imagen">
            </div>
                <h2>${pelicula.title}}</h2>
                <span>${pelicula.director}</span>
                <h3>${pelicula.producer}</h3>
                <p>${pelicula.description}</p>

        </article>    `);
        const main=document.querySelector("main");
        main.append(article)
        
    });
   });