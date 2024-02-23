/* *******  DESPUES BORRAR  */
const b_categorias = [
	{
		id: "c377b47a-f80c-4be5-8f9d-ead89cbb0a4a",
		nombre: "COMIDA ITALIANA",
	},
	{
		id: "42948a68-efd1-4bc2-932c-4a8539823c54",
		nombre: "SERVICIOS",
	},
	{
		id: "ac295847-93c5-4fc8-b4ab-ecda5e8f4bb0",
		nombre: "SALIDAS",
	},
	{
		id: "de2a87a2-5eb4-4fe3-a300-d95a33b0e777",
		nombre: "EDUCACIÓN",
	},
	{
		id: "33bded42-a463-4dd1-a0ee-c115597e7f37",
		nombre: "TRANSPORTE",
	},
	{
		id: "b6d68d8a-8036-4115-883b-5cb57c1c3813",
		nombre: "TRABAJO DIARIO ALOCADO",
	},
	{
		id: "e989043c-7d70-4e22-9534-0b3ccdf83be3",
		nombre: "ALQUILER DE LA CASA",
	},
];

const b_operaciones = [
	{
		id: "da576431-7aae-4d1a-8b19-aeeeceef9509",
		descripcion: "compra",
		monto: 111000123.233,
		categoria: "c377b47a-f80c-4be5-8f9d-ead89cbb0a4a",
		tipo: "GASTO",
		fecha: "2024/02/07",
	},
	{
		id: "62124484-c39d-4663-8cbb-0e7a3a9e856b",
		descripcion: "pizza",
		monto: 5000,
		categoria: "c377b47a-f80c-4be5-8f9d-ead89cbb0a4a",
		tipo: "GASTO",
		fecha: "2023/06/07",
	},
	{
		id: "fc5199e7-89ad-46a9-8be2-153df86a13e4",
		descripcion: "aguinaldo",
		monto: 910000000.55,
		categoria: "b6d68d8a-8036-4115-883b-5cb57c1c3813",
		tipo: "GANANCIA",
		fecha: "2024/02/17",
	},
	{
		id: "2d50aad3-f585-4bd2-88f4-cb2bdb66f021",
		descripcion: "Cena lunes",
		monto: 50000,
		categoria: "c377b47a-f80c-4be5-8f9d-ead89cbb0a4a",
		tipo: "GASTO",
		fecha: "2023/02/05",
	},
	{
		id: "2959f1ea-368f-4d4b-8151-73ce497f56cc",
		descripcion: "Merienda",
		monto: 40000,
		categoria: "c377b47a-f80c-4be5-8f9d-ead89cbb0a4a",
		tipo: "GASTO",
		fecha: "2024/12/06",
	},
	{
		id: "01dc7555-b874-490f-9d03-e7a61d441efb",
		descripcion: "Librería",
		monto: 10000,
		categoria: "de2a87a2-5eb4-4fe3-a300-d95a33b0e777",
		tipo: "GASTO",
		fecha: "2024/02/12",
	},
	{
		id: "5bc4c88c-c6e5-4d18-bbc9-cd6a5977a73f",
		descripcion: "Aguinaldo",
		monto: 50000,
		categoria: "b6d68d8a-8036-4115-883b-5cb57c1c3813",
		tipo: "GANANCIA",
		fecha: "2024/01/31",
	},
	{
		id: "99ccefa4-ff57-4e4a-a178-9e35965d5417",
		descripcion: "Venta net",
		monto: 41234,
		categoria: "b6d68d8a-8036-4115-883b-5cb57c1c3813",
		tipo: "GANANCIA",
		fecha: "2024/02/08",
	},
	{
		id: "89965aab-991a-44ad-9ded-ff0731d7da83",
		descripcion: "Sueldo",
		monto: 80000,
		categoria: "e989043c-7d70-4e22-9534-0b3ccdf83be3",
		tipo: "GANANCIA",
		fecha: "2024/02/08",
	},
	{
		id: "4c121508-97a7-4dc7-ba6d-858794f5529f",
		descripcion: "Alquiler",
		monto: 63123,
		categoria: "42948a68-efd1-4bc2-932c-4a8539823c54",
		tipo: "GASTO",
		fecha: "2024/01/30",
	},
	{
		id: "c4113266-375a-4b26-8a25-4d2040433291",
		descripcion: "Remedios",
		monto: 20000,
		categoria: "42948a68-efd1-4bc2-932c-4a8539823c54",
		tipo: "GASTO",
		fecha: "2024/02/07",
	},
];

localStorage.setItem("categorias", JSON.stringify(b_categorias));
localStorage.setItem("operaciones", JSON.stringify(b_operaciones));

/* ******* HASTA AQUI DSPS BORRRAAAAAAAAARRRRRRRRRRRRRR===========================*/

/* ================== DECLARAR LOS ARRAY  categorías y operaciones  ================ */
/* OOOOOOOOOOOOOOO jjjjjjjjj oooooooooooooo ver con que nombre usa Lucía */
let categFiltro = [];
let operaFiltro = [];

/* ================== Menú  - y Menú Hambburguesa  ================ */
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

const menuInicio = document.getElementById("menu-inicio");
const menuBalance = document.getElementById("menu-balance");
const menuCategorias = document.getElementById("menu-categorias");
const menuReportes = document.getElementById("menu-reportes");

abrir.addEventListener("click", () => {
	nav.classList.remove("hidden");
	cerrar.classList.remove("hidden");
	abrir.classList.add("hidden");
});

function cerrarNav() {
	nav.classList.add("hidden");
	cerrar.classList.add("hidden");
	abrir.classList.remove("hidden");
}
cerrar.addEventListener("click", cerrarNav);
menuInicio.addEventListener("click", cerrarNav);
menuBalance.addEventListener("click", cerrarNav);
menuCategorias.addEventListener("click", cerrarNav);
menuReportes.addEventListener("click", cerrarNav);

const contenedor_menuInicio = document.getElementById("cont-menu-inicio");
const contenedor_menuBalance = document.getElementById("cont-menu-balance");
const contenedor_menuCategorias = document.getElementById(
	"cont-menu-categorias"
);
const contenedor_menuReportes = document.getElementById("cont-menu-reportes");

function mostrar(mostrar) {
	contenedor_menuInicio.classList.add("hidden");
	contenedor_menuBalance.classList.add("hidden");
	contenedor_menuCategorias.classList.add("hidden");
	contenedor_menuReportes.classList.add("hidden");

	mostrar.classList.remove("hidden");
}

menuInicio.addEventListener("click", () => {
	mostrar(contenedor_menuInicio);
});

menuBalance.addEventListener("click", () => {
	mostrar(contenedor_menuBalance);
	inicializarFechaFiltro();

	if (controlarSiHayCateOper()) {
		/* Si hay categorías y operaciones, entonces se habilita "Mostrar filtros" y too  muestra*/
		document.getElementById("ocultar-filtros").classList.remove("hidden");
		categFiltro = JSON.parse(localStorage.getItem("categorias"));
		cargarCategorias();
		filtrar_oper();
	} else {
		/* si NO, hay categorías/operaciones, se esconde FILTROS, y se deja 
		el mensaje que cargar operaciones. */
		document.getElementById("ocultar-filtros").classList.add("hidden");
	}
});

menuCategorias.addEventListener("click", () => {
	mostrar(contenedor_menuCategorias);
});

menuReportes.addEventListener("click", () => {
	mostrar(contenedor_menuReportes);
	mostrarReportes(); /* ver en scriptReportes.js */
});

/* ------------------------------------------------------------------------------------------------ */

/* ======================== CLARO - OSCURO ========================  */
const btn_claro_oscuro = document.getElementById("btn-claro-oscuro");

btn_claro_oscuro.addEventListener("click", () => {
	if (
		localStorage.theme === "dark" || //esta en modo OSCURO? => PASAR A claro
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		btn_claro_oscuro.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`; //poner luna
		document.documentElement.classList.remove("dark"); //PASAR A claro
		localStorage.theme = "light"; //PASAR A claro
	} else {
		btn_claro_oscuro.innerHTML = `<i class="fa fa-sun-o"></i>`; //poner SOL
		document.documentElement.classList.add("dark"); //pasar a oscuro
		localStorage.theme = "dark"; //pasar a oscuro
	}
});

function modoClaroOscuro() {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		btn_claro_oscuro.innerHTML = `<i class="fa fa-sun-o"></i>`; //pone SOL
		document.documentElement.classList.add("dark"); //pinta oscuro
	} else {
		btn_claro_oscuro.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`; //pone LUNA
		document.documentElement.classList.remove("dark"); //pinta Claro
	}
}
/* ------------------------------------------------------------------------------------------------ */

/* =============================================================== */
/* para Operaciones BALANCE Y FILTROS */

/* Por si borraron todas las categorías o todas la soperaciones */
function controlarSiHayCateOper() {
	let lonCate = 0;
	let lonOper = 0;
	if (localStorage.getItem("categorias") !== null) {
		lonCate = JSON.parse(localStorage.getItem("categorias")).length;
	}
	if (localStorage.getItem("operaciones") !== null) {
		lonOper = JSON.parse(localStorage.getItem("operaciones")).length;
	}

	if (lonCate > 0 && lonOper > 0) {
		return true;
	} else {
		return false;
	}
}

/* Carga todas las categorias para selecciona en "Filtros" */
const filtro_categoria = document.getElementById("filtro-categoria");
function cargarCategorias() {
	filtro_categoria.innerHTML = `<option value="TODAS">TODAS</option>`;
	categFiltro.forEach((cat) => {
		filtro_categoria.innerHTML +=
			`<option value="` + cat.id + `">` + cat.nombre + `</option>`;
	});
}

/* Inicializa la fecha con la fecha del día 
 -- Tiene el mismo problema que ADA, cambia la fecha antes, 
     por ej pone 18 cuando es 17 a la noche*/
function inicializarFechaFiltro() {
	var fecha = new Date();

	var fecParaInput = fecha.getFullYear() + "-";

	fecha.getMonth() + 1 < 10
		? (fecParaInput += "0" + (fecha.getMonth() + 1) + "-")
		: (fecParaInput += fecha.getMonth() + 1 + "-");
	fecha.getDate() < 10
		? (fecParaInput += "0" + fecha.getDate())
		: (fecParaInput += fecha.getDate());
	document.getElementById("filtro-fecha").setAttribute("value", fecParaInput);

	/* document //OJO! ESTA OPCION TE CAMBIA EL DÍA, UNAS 3 HORAS ANTES QUE TERMINE EL DÍA)
		.getElementById("filtro-fecha")
		.setAttribute("value", fecha.toJSON().slice(0, 10)); */
}

/* Muestra/Oculta contenedor filtros */
const ocultar_filtros = document.getElementById("ocultar-filtros");
const contenedor_filtros = document.getElementById("contenedor-filtros");
ocultar_filtros.addEventListener("click", () => {
	contenedor_filtros.classList.toggle("hidden");
	if (contenedor_filtros.classList.contains("hidden")) {
		ocultar_filtros.innerHTML = `<i class="fa-regular fa-eye"></i><p class="ml-1"> Mostrar Filtros </p>`;
	} else {
		ocultar_filtros.innerHTML = `<i class="fa-regular fa-eye-slash"></i><p class="ml-1"> Ocultar Filtros </p>`;
	}
});

/*--------------- Para filtrar operaciones -----------------------*/
const filtro_tipo = document.getElementById("filtro-tipo");
const filtro_cate = document.getElementById("filtro-categoria");
const filtro_fecha = document.getElementById("filtro-fecha");
const filtro_orden = document.getElementById("filtro-orden");

const cont_con_oper = document.getElementById("cont-con-oper");
const con_oper_listado = document.getElementById("con-oper-listado");

filtro_tipo.addEventListener("change", filtrar_oper);
filtro_cate.addEventListener("change", filtrar_oper);
filtro_fecha.addEventListener("change", filtrar_oper);
filtro_orden.addEventListener("change", filtrar_oper);

/* Filtra por FECHA mas/menos reciente  */
function masReciente(operaFiltro, como) {
	if (como === "A") {
		operaFiltro.sort((a, b) => {
			return new Date(a.fecha) - new Date(b.fecha);
		});
	} else {
		operaFiltro.sort((a, b) => {
			return new Date(b.fecha) - new Date(a.fecha);
		});
	}
}

/* Filtra por mayor/menor MONTO, NO separa gasto de ganancia */
function mayorMonto(operaFiltro, como) {
	return operaFiltro.sort((a, b) => {
		return como === "A" ? a.monto - b.monto : b.monto - a.monto;
	});
}

/* Filtra por Descripción Asc o Desc */
function aZ(operaFiltro, como) {
	if (como === "A") {
		operaFiltro.sort((a, b) => {
			return a.descripcion.localeCompare(b.descripcion);
		});
	} else {
		operaFiltro.sort((a, b) => {
			return b.descripcion.localeCompare(a.descripcion);
		});
	}
}

/* Selectiva para determinar que seleccionó en "Ordenar por" */
function ordenarOperaciones(operaFiltro, orden) {
	switch (orden) {
		case "mas_reciente":
			operaFiltro = masReciente(operaFiltro, "D");
			break;
		case "menos_reciente":
			operaFiltro = masReciente(operaFiltro, "A");
			break;
		case "mayor_monto":
			operaFiltro = mayorMonto(operaFiltro, "D");
			break;
		case "menor_monto":
			operaFiltro = mayorMonto(operaFiltro, "A");
			break;
		case "A_Z":
			operaFiltro = aZ(operaFiltro, "A");
			break;
		case "Z_A":
			operaFiltro = aZ(operaFiltro, "D");
			break;
		default:
	}
}

/* Para formatear fecha a mostrar en el listado */
function formatFecha(f) {
	let fc = new Date(f);
	let ff;
	fc.getDate() < 10
		? (ff = "0" + fc.getDate() + "/")
		: (ff = fc.getDate() + "/");
	fc.getMonth() + 1 < 10
		? (ff += "0" + (fc.getMonth() + 1) + "/")
		: (ff += fc.getMonth() + 1 + "/");
	ff += fc.getFullYear();
	return ff;
}

/* Busca nombre de las Categorías para mostrar */
function nombreCat(id) {
	const resultado = categFiltro.find((c) => c.id === id);
	if (resultado === undefined) {
		return "Sin categoría.";
	} else {
		return resultado.nombre;
	}
}

/* === Función ppal que llmanan TODOS los FILTROS cada vez que hay un cambio ===== */
function filtrar_oper() {
	let x;
	let sumaGana = 0;
	let sumaGasto = 0;
	operaFiltro = JSON.parse(localStorage.getItem("operaciones"));

	/* Obtiene los value de cada filtro */
	const tipo = filtro_tipo.value;
	const cate = filtro_cate.value;
	const fechaDesde = new Date(`${filtro_fecha.value}T00:00:00`);
	const orden = filtro_orden.value;

	/* Filtrar por Tipo */
	if (tipo !== "TODO") {
		operaFiltro = operaFiltro.filter((oper) => oper.tipo === tipo);
	}

	/* Filtrar por Categorías */
	if (cate !== "TODAS") {
		operaFiltro = operaFiltro.filter((oper) => oper.categoria === cate);
	}

	/* Filtrar por Fecha desde */
	operaFiltro = operaFiltro.filter(function (op) {
		return fechaDesde < new Date(op.fecha);
	});

	/* Ordenar */
	ordenarOperaciones(operaFiltro, orden);

	/* Si hay datos después de filtrar... */
	if (operaFiltro.length > 0) {
		document.getElementById("cont-sin-oper").classList.add("hidden");
		cont_con_oper.classList.remove("hidden");

		con_oper_listado.innerHTML = "";

		operaFiltro.forEach((op) => {
			if (op.tipo === "GANANCIA") {
				sumaGana += op.monto;
				x = `<div> $${formatPesos(op.monto)} </div>`;
			} else {
				sumaGasto += op.monto;
				x = `<div class="text-[red] dark:text-red-900">	-$${formatPesos(
					Math.abs(op.monto)
				)} </div>`;
			}

			con_oper_listado.innerHTML += `<div class="flex">
							<div class="w-[30%]">${op.descripcion.toUpperCase() + "-" + op.tipo}</div>
							<div class="w-[30%]">${nombreCat(op.categoria)}</div>
							<div class="w-[15%]">${formatFecha(op.fecha)}</div>
							<div class="w-[16%] flex justify-end">${x}</div>
							<div class="w-[9%]  flex justify-end"> Edi-Eli</div>
						</div>`;
		});

		document.getElementById("balance-ganancias").innerHTML = `$${formatPesos(
			sumaGana
		)}`;
		document.getElementById("balance-gastos").innerHTML = `-$${formatPesos(
			sumaGasto
		)}`;

		if (sumaGana - sumaGasto >= 0) {
			x = `<div> $${formatPesos(sumaGana - sumaGasto)} </div>`;
		} else {
			x = `<div class="text-[red] dark:text-red-900">	-$${formatPesos(
				Math.abs(sumaGana - sumaGasto)
			)} </div>`;
		}
		document.getElementById("balance-total").innerHTML = `${x}`;
	} else {
		document.getElementById("cont-sin-oper").classList.remove("hidden");
		cont_con_oper.classList.add("hidden");
	}
}

/* ================================================================================================*/
function funcionesAEjecutar() {
	modoClaroOscuro();
}
/* Cuando se termina de cargar la página  */
window.onload = funcionesAEjecutar;
