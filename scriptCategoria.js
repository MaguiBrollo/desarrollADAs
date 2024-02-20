// ________________________________
// crearCategoria con id encriptado
// --------------------------------
const crearIdDato = (nombre) => {
    return { id: uuidv4(), nombre };
}

// ___________________________________
// constante Categorias iniciales para restaurar
// -----------------------------------
const categoriasInicio = [
    crearIdDato('COMIDA'),
    crearIdDato('EDUCACION'),
    crearIdDato('SALIDAS'),
    crearIdDato('SERVICIOS'),
    crearIdDato('TRANSPORTE'),
    crearIdDato('TRABAJO'),
];


// ________________________
// Guardar en Local Storage
// ------------------------
const grabar = (locacion, dato) => {
    // console.log('estoy en grabar', locacion, dato);
    localStorage.setItem(locacion, JSON.stringify(dato))
};


// ___________________________
// Recuperar del Local Storage
// ---------------------------
const recuperar = (locacion) => { return JSON.parse(localStorage.getItem(locacion)) }


// // _______________________________
// // Funcion Mostrar las categorias
// // -------------------------------
let $muestraCategorias = document.getElementById("muestra-categorias");
const mostrarDato = () => {
    $muestraCategorias.innerHTML = "";
    categorias = recuperar("categorias");
    categorias.forEach(categoria => {
        if ($muestraCategorias !== null) {
            let divContenCat = document.createElement("div");
            divContenCat.id = "conten-cat";
            let div1 = document.createElement("div");
            div1.id = "nombre-cat";
            let div2 = document.createElement("div");
            div2.id = "bot-editar-borrar"
            divContenCat.classList.add("flex", "justify-between", "my-2", "w-full");
            div1.classList.add("flex", "items-center");
            let spanCategoria = document.createElement("span");
            spanCategoria.classList.add("span-categoria");
            spanCategoria.innerHTML = categoria.nombre;

            let btnEditar = document.createElement("button");
            btnEditar.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
            btnEditar.id = `btn-editar-${categoria.id}`; // Identificador único para el botón de editar
            btnEditar.classList.add("flex-shrink-0", "h-8", "px-2", "md:px-4", "lg:px-6", "rounded-lg", "bg-blue-100", "mx-1", "md:mx-4", "lg:mx-4", "hover:bg-blue-200", "focus:bg-blue-200", "hover:dark:bg-gray-400", "focus:dark:bg-gray-400", "hover:shadow-md", "focus:shadow-md");
            btnEditar.addEventListener("click", () => editarCategoria(categoria.id));

            let btnBorrar = document.createElement("button");
            btnBorrar.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
            btnBorrar.id = `btn-borrar-${categoria.id}`; // Identificador único para el botón de borrar
            btnBorrar.classList.add("flex-shrink-0", "h-8", "px-2", "md:px-4", "lg:px-6", "rounded-lg", "bg-blue-100", "hover:bg-blue-200", "focus:bg-blue-200", "hover:dark:bg-gray-400", "focus:dark:bg-gray-400", "hover:shadow-md", "focus:shadow-md");
            btnBorrar.addEventListener("click", () => borrarCategoria(categoria.id));

            div1.appendChild(spanCategoria);
            div2.appendChild(btnEditar);
            div2.appendChild(btnBorrar);
            divContenCat.appendChild(div1);
            divContenCat.appendChild(div2);
            $muestraCategorias.appendChild(divContenCat);

        } else {
            console.log("El elemento con ID 'muestraCategorias' no existe en el DOM.");
        };
    });
};




// // _______________________________
// // Funcion Mostrar las categorias
// // -------------------------------
// let $muestraCategorias = document.getElementById("muestra-categorias");
// const mostrarDato = () => {
//     $muestraCategorias.innerHTML = "";    // Borrar el contenido actual del div
//     categorias = recuperar("categorias"); //Recupera categorías del LS
//     categorias.forEach(categoria => {
//         if ($muestraCategorias !== null) {    // Verificar si el elemento existe 
//             let divContenCat = document.createElement("div");
//             divContenCat.id = "conten-cat";
//             let div1 = document.createElement("div");
//             div1.id = "nombre-cat";
//             let div2 = document.createElement("div"); // div para la categoría
//             div2.id = "bot-editar-borrar"
//             divContenCat.classList.add("flex", "justify-between", "my-2", "w-full");
//             div1.classList.add("flex", "items-center");
//             let spanCategoria = document.createElement("span"); // span para nombre
//             spanCategoria.classList.add("span-categoria");  // Agregar una clase al nuevo elemento <span>
//             spanCategoria.innerHTML = categoria.nombre;

//             let btnEditar = document.createElement("button");  // <button> para editar y llamado
//             btnEditar.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
//             btnEditar.classList.add("flex-shrink-0", "h-8", "px-2", "md:px-4", "lg:px-6", "rounded-lg", "bg-blue-100", "mx-1", "md:mx-4", "lg:mx-4", "hover:bg-blue-200", "focus:bg-blue-200", "hover:dark:bg-gray-400", "focus:dark:bg-gray-400", "hover:shadow-md", "focus:shadow-md");
//             btnEditar.addEventListener("click", () => editarCategoria(categoria.id));

//             let btnBorrar = document.createElement("button");  // <button> para borrar y llamado
//             btnBorrar.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
//             btnBorrar.classList.add("flex-shrink-0", "h-8", "px-2", "md:px-4", "lg:px-6", "rounded-lg", "bg-blue-100", "hover:bg-blue-200", "focus:bg-blue-200", "hover:dark:bg-gray-400", "focus:dark:bg-gray-400", "hover:shadow-md", "focus:shadow-md");
//             btnBorrar.addEventListener("click", () => borrarCategoria(categoria.id));

//             // Agregar los  elementos a los contenedores
//             div1.appendChild(spanCategoria);
//             div2.appendChild(btnEditar);
//             div2.appendChild(btnBorrar);
//             divContenCat.appendChild(div1);
//             divContenCat.appendChild(div2);
//             $muestraCategorias.appendChild(divContenCat); // Agregar el nuevo <div> como hijo del elemento con ID "muestraCategorias"

//         } else {
//             console.log("El elemento con ID 'muestraCategorias' no existe en el DOM.");
//         };
//     });
// };


// _________________________
// Funcion inicia categorias
// -------------------------
let valorGuardado;
let categorias;
let iniciaCategorias = () => {
    valorGuardado = recuperar("categorias");
    if (valorGuardado === null) {   // Verificar si el valor es null
        categorias = categoriasInicio;
        grabar("categorias", categorias);  // guarda las categorías con localStorage
        mostrarDato(categorias);
    } else {
        mostrarDato(categorias);
    }
}


//______________________________________________________________________________
// Función que  evita minúsculas y acentos --> para evitar categorías duplicadas
//------------------------------------------------------------------------------
const sinAcentosMayus = (texto) => {
    // console.log('estoy en sinAcentosMayus',texto, typeof [texto]);
    if (typeof texto === 'string') {
        texto = texto.replace(/[áäâà]/g, 'a');
        texto = texto.replace(/[éëêè]/g, 'e');
        texto = texto.replace(/[íïîì]/g, 'i');
        texto = texto.replace(/[óöôò]/g, 'o');
        texto = texto.replace(/[úüûù]/g, 'u');
        texto = texto.toUpperCase();
    }
    return texto;
}
   
// _____________________________________________
// funcion armado del array para guardarlo en LS
// ---------------------------------------------
const armadoArrayGuardar = (locacion, datoObjeto, funcion, indice) => {
    // let indice;
    let datoDuplicado;
    let elementoObjeto = datoObjeto;
    console.log('Dato recibido:', 'locacion: ',locacion, 'datoObjeto: ', datoObjeto, 'elementoObjeto: ', elementoObjeto, 'funcion: ', funcion);

    let datoArray = Array.isArray(datoObjeto) ? datoObjeto : [datoObjeto];
    let datosAlmacenadosLS = recuperar(locacion);
    console.log(datosAlmacenadosLS);
    let arrayListoParaGuardar = [];

    if (datosAlmacenadosLS) {
        datoDuplicado = revisarDatosDuplicados(datoArray, datosAlmacenadosLS);
        if (!datoDuplicado) {
            if (funcion === "nuevaCateg") {
                // console.log('es NUEVA CATEGORIA');
                arrayListoParaGuardar = datosAlmacenadosLS.concat(datoArray);
                console.log(arrayListoParaGuardar);
                return arrayListoParaGuardar;
            }
            if (funcion === "edicion") {
                arrayListoParaGuardar = datosAlmacenadosLS.map(categoria => {
                    if (categoria.id === datoObjeto.id) {
                        return {...categoria, nombre: datoObjeto.nombre}; // Actualiza el nombre si el ID coincide
                    } else {
                        return categoria; // Retorna la categoría sin cambios si el ID no coincide
                    }

                    console.log(arrayListoParaGuardar);
                // datoArray.forEach(dato => {
                //     // const index = datosAlmacenados.findIndex(categoria => categoria.id === dato.id);
                //     // console.log(index);
                //     console.log(indice);
                //     // alert();
                //     if (indice !== -1) {
                //         datosAlmacenadosLS[indice].nombre ="XXXX";
                //         console.log(datosAlmacenadosLS[indice], datosAlmacenadosLS);
                //         alert('Actualizado correctamente');
                //     }

                //     // if (indice !== -1) {
                //     //     datosAlmacenados[indice] = {id: indice, nombre: datoObjeto.nombre};
                //     //     console.log(datosAlmacenados[indice], id);
                //     //     alert();
                //     // }
                });
                // arrayListoParaGuardar = datosAlmacenadosLS;
                return arrayListoParaGuardar;
            }
        } else {
            activarVentMod($mjeCatDuplicada);
            return;
        }
    }
};







//_______________________________________
// Función ingreso categoría en el input (transformación en mayúscula, sin acento)
// --------------------------------------
let $inpCategoria = document.getElementById("categoria");
let nuevaCategoria = '';
const ingresarCategoria = (inputTextCateg) => {
    nuevaCategoria = inputTextCateg.value.trim();
    nuevaCategoria = sinAcentosMayus(nuevaCategoria);
    return nuevaCategoria.slice(0, 14); //toma hasta 14 caracteres para la categoría
};


// _______________________________________________________
// Evento - Boton cerrar mensaje por categorías duplicadas
// -------------------------------------------------------
const $contVentanaModal = document.getElementById("cont-ventana-modal");
const $mjeCatDuplicada = document.getElementById("mje-cat-duplicada");
const $cerrar = document.getElementById("cerrar-cat-duplicada");
$cerrar.addEventListener('click', () => {
    $mjeCatDuplicada.classList.add("hidden");
    if ($contEditarCategoria.classList.contains("hidden")) {
        // console.log('puedo cerrar el fondo de la ventana modal');
        $contVentanaModal.classList.add("hidden");
    } else {
        console.log('puedo cerrar el fondo de la ventana modal --> hay otro mensaje activo');
    }
    $inpCategoria.value = " ";
});


// ______________________________________________________________________
// Evento - Ingreso de texto en input de categoria o de edicion categoria
// ----------------------------------------------------------------------
$inpCategoria.addEventListener('input', (e) => $inpCategoria.value = ingresarCategoria($inpCategoria));


// _________________________________________________
// Evento - Boton cerrar mensaje por categoría vacía
// -------------------------------------------------
const $cerrarCatVacia = document.getElementById("cerrar-cat-vacia");
const $mjeCatVacia = document.getElementById("mje-cat-vacia");
$cerrarCatVacia.addEventListener('click', () => {
    $mjeCatVacia.classList.add("hidden");
    // $contVentanaModal.classList.add("hidden");
    if ($contEditarCategoria.classList.contains("hidden")) {
        // console.log('puedo cerrar el fondo de la ventana modal');
        $contVentanaModal.classList.add("hidden");
    } else {
        console.log('puedo cerrar el fondo de la ventana modal --> hay otro mensaje activo');
    }
    $inpCategoria.value = " "
});


// ________________________________________
// Revisar nombres de categorias duplicados
// ----------------------------------------
const revisarDatosDuplicados = (categoriaParaGuardar, categoriasAlmacenadas) => { // 1er parámetro array - 2do parámetro array
    console.log('estoy en revisarDatosDuplicados, recibo: categoriaParaGuardar: ',categoriaParaGuardar, 'y categoriasAlmacenadas: ',categoriasAlmacenadas);
   
    // let nombreCategoriaParaGuardar = categoriaParaGuardar.nombre;
    // console.log('ingresé a revisarDatosDuplicados, llegaron estos datos', categoriaParaGuardar, categoriasAlmacenadas);
    // Verificar si alguna categoría almacenada tiene el mismo nombre (en mayúsculas sin acentos) que la nueva categoría
    // let categoriaDuplicada;
    // let catAlm;
    // let catNue;
    for (let i=0 ; i < categoriasAlmacenadas.length; i++){
        console.log('estoy for', 'x',categoriasAlmacenadas[i].nombre,'x', categoriaParaGuardar.nombre,'x');
        // catAlm = categoriasAlmacenadas[i].nombre;
        if (categoriasAlmacenadas[i].nombre === categoriaParaGuardar[0].nombre){
            console.log(categoriasAlmacenadas[i].nombre, categoriaParaGuardar.nombre);
            categoriaDuplicada = true;
            console.log('categoria duplicada: ',categoriaDuplicada);
            return categoriaDuplicada;
        }
    }
    // const categoriaDuplicada = categoriasAlmacenadas.some(categoria => categoria.nombre.trim() === categoriaParaGuardar.nombre); //devuelve true si hay categoriaDup o false si no la hay
    categoriaDuplicada=false;
    console.log('categoria duplicada', categoriaDuplicada);
    return categoriaDuplicada;
};


// const categoriaDuplicada = categoriaParaGuardar.some(categoria => categoriasAlmacenadas.some(c => c.nombre === categoria.nombre));


// ______________________________________________
// Evento - Boton AGREGAR de ingreso de categoría
// ----------------------------------------------
let $botonIngresoCategoria = document.getElementById('boton-ingreso-categoria');
$botonIngresoCategoria.addEventListener('click', (e) => {
    const categoriasLS = recuperar("categorias");
    let valorCategoria = $inpCategoria.value.trim();    // Obtener el valor del input de la categoría 
    if (valorCategoria !== "") {  //evita ingreso de categoría vacía
        let nuevaCategEncrip = crearIdDato(valorCategoria);
        console.log('esta es la nuevaCategEncrip que pasa por parámetro a armadoArrayGuardar (nuevaCategEncrip) y revisarDatosDuplicados (ambas). nuevaCategEncrip: ', nuevaCategEncrip, 'categoriasLS: ', categoriasLS);
        nuevaCategEncrip = Array.isArray(nuevaCategEncrip) ? nuevaCategEncrip : [nuevaCategEncrip];
        let datoDuplicado = revisarDatosDuplicados(nuevaCategEncrip, categoriasLS);
        if (!datoDuplicado) {  //evita el ingreso de categoria duplicada
            // console.log('estoy en If !datoDuplicado por el sí, la categoria  No existe', !(datoDuplicado));
            // Armado array guardar debe pasar todo el objeto (id y nombre)
            let categoriasParaGuardar = armadoArrayGuardar("categorias", nuevaCategEncrip, "nuevaCateg");
            console.log('armadoArrayAntes de grabar:', categoriasParaGuardar);
            alert();
            grabar("categorias", categoriasParaGuardar);
            mostrarDato();
            $inpCategoria.value = " ";
            return;
        } else {
            activarVentMod($mjeCatDuplicada);
            return;
        }
    } else {
        activarVentMod($mjeCatVacia);
        return;
    }
});


// _______________________________________
// Función  cancelar edicion de categoría
// ---------------------------------------
const $contEditarCategoria = document.getElementById("cont-editar-categoria");
const $inpEditarCategoria = document.getElementById("editar-categoria");
const cerrarVentEdicion = () => {
    // console.log('estoy en cerrarVentEdicion');
    $inpEditarCategoria.value = "";
    $contEditarCategoria.classList.add("hidden");
    $contVentanaModal.classList.add("hidden");
}


// ________________________
// Función editar categoría
// ------------------------
const $botonCancelarEditarCategoria = document.getElementById("boton-cancelar-editar-categoria");
const $botonGrabarEditarCategoria = document.getElementById("boton-grabar-editar-categoria");
// const $ingresoCategoria = document.getElementById("ingreso-categoria")
const editarCategoria = (id) => {
    console.log('este es el id para editar',id);
    alert();
    activarVentMod($contEditarCategoria); //Activa la ventana modal con espacio de edicion;  
    let categoriasLS = recuperar("categorias");  //Obtener categorías del localStorage    
    let categoriaAEditar = categoriasLS.find(categoria => categoria.id === id);   //Encontrar la categoría a editar, devuelve un objeto 
    console.log(categoriaAEditar);
    $inpEditarCategoria.value = categoriaAEditar.nombre;   //Mostrar el nombre de la categoría a editar en el input
    $inpEditarCategoria.addEventListener('input', (e) => $inpEditarCategoria.value = ingresarCategoria($inpEditarCategoria));

    $botonCancelarEditarCategoria.addEventListener('click', () => cerrarVentEdicion());

    $botonGrabarEditarCategoria.addEventListener('click', () => { 
        let nuevoNombre = $inpEditarCategoria.value;
        if (nuevoNombre !== "") {
            console.log('entré en el if');
            if (nuevoNombre === categoriaAEditar.nombre) {
                // grabar(categoriasLS);
                // mostrarDato();
                cerrarVentEdicion();
                
            } else {
                console.log(categoriaAEditar.id, nuevoNombre);
                // alert('319 estoy en editar Cat este es el nuevo nombre de categoria: ', nuevoNombre);
                let categoriaEditada = { id: categoriaAEditar.id, nombre: nuevoNombre };
                console.log(categoriaEditada);
                console.log('pasará a revisarDatosDuplicados categoriaEditada:', categoriaEditada);
                categoriaEditada = Array.isArray(categoriaEditada) ? categoriaEditada : [categoriaEditada]; //transforma objeto en array categoriaEditada para pasar por parámetro en revisarDatosDuplicados
                let categoriaDuplicada = revisarDatosDuplicados([categoriaEditada], categoriasLS);
                if (!categoriaDuplicada) { // Ingresa al if si no hay duplicados
                    // alert('categoria editada');
                    let arrayListo = armadoArrayGuardar("categorias", categoriaEditada, "edicion", id);
                    // console.log(arrayListo);
                    // categoriaAEditar.nombre = nuevoNombre;
                    grabar("categorias", arrayListo);
                    mostrarDato();
                    cerrarVentEdicion();
                } else {
                    activarVentMod($mjeCatDuplicada);
                    return;
                }
            }
        } else {
            console.log("El nuevo nombre de la categoría no puede estar vacío.");
        }
    });
};



//--------------------------   
// Función borrar categoría
// -------------------------
const borrarCategoria = (id) => {
    const categorias = recuperar("categorias");
    const nuevasCategorias = categorias.filter(categoria => categoria.id !== id);  // Filtrar las categorías, excluyendo la del id
    grabar("categorias", nuevasCategorias);  // Guardar las nuevas categorías en el localStorage   
    mostrarDato();  // Mostrar las categorías actualizadas
};

// ______________________________
// Función  Activar Ventana Modal
// ------------------------------
const activarVentMod = (contenAActivar) => {
    $contVentanaModal.classList.remove("hidden");
    contenAActivar.classList.remove("hidden");
}

// ___________________________________
// Llamado para restaurar las categorías
// -----------------------------------
iniciaCategorias();



