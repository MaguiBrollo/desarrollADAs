/* ================== Menú Hamburguesa ================ */
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

const menuInicio = document.getElementById("menu-inicio");
const menuBalance = document.getElementById("menu-balance");
const menuCategorias = document.getElementById("menu-categorias");
const menuReportes = document.getElementById("menu-reportes");

const cerrar_h = document.getElementById("cerrar_h");
const cerrar_p = document.getElementById("cerrar_p");
const cerrar_c = document.getElementById("cerrar_c");
const cerrar_co = document.getElementById("cerrar_co");

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
});

menuCategorias.addEventListener("click", () => {
	mostrar(contenedor_menuCategorias);
});

menuReportes.addEventListener("click", () => {
	mostrar(contenedor_menuReportes);
});
