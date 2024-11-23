//hola //
const librosColeccionJSON=[
    {   "Nombre":"11 minutos",
        "CantidadDePaginas":180, 
        "Autor":"paulo coelho",
        "Género":["Novela, Ficción"],
        "disponible":true
    },
    {
        "Nombre":"el alquimista",
        "CantidadDePaginas":"240",
        "Autor":"paulo coelho",
        "Género":"Novela, Drama, Misión, Literatura fantástica, Ficción de aventuras",
        "disponible":false
    }
    ]
    function informacionLibro(libro ) {
        
        console.log("Título:", libro.Nombre);
        console.log("cantidad de paginas",libro.CantidadDePaginas);
        console.log("Autor:", libro.Autor);
        console.log("genero:",  libro.Género);
        console.log("disponible", libro.disponible);
    }
    


function  imprimirLibros(arregloLibros) {
    for (let i = 0; i < arregloLibros.length; i++) {
        const libro = arregloLibros[i];
       informacionLibro(libro);
    }
}
imprimirLibros(librosColeccionJSON);