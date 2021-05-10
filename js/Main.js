window.onload = function () {
	const url = "http://www.omdbapi.com/?apikey=";
	const key = "6a18f498";
	const pelicula = "&s=batman";
	fetch(url + key + pelicula)
		.then((resp) => resp.json())
		.then((data) => crearListadoProductos(data.Search))
		.catch((err) => console.error("error: ", err));
};

function crearListadoProductos(data) {
	console.log(data);
	let nodo = document.querySelector("#productos");
	let html = "";
	data.forEach((producto) => {
		const { imdbID, Title, Year, Type, Poster } = producto;
		html += `
			<div id=${imdbID}>
				<div class="card">
						<img src=${Poster} alt="Poster"/>
						<div class="card_body">
							<div class="card_title">
								<h3>${Title} </h3>
							</div>
							<div>
								<h5>Año estreno ${Year} </h5>
								<h6>Tipo ${Type}</h6>
							</div>
							<button class="listaProducto" id="agregarProducto" data-id=${imdbID}> 
							<i class="fas fa-dollar-sign"></i>
							Agregar ticket al carrito   			
							</button>
						</div>
				</div>
			</div>
		`;
	});
	nodo.innerHTML = html;
}

/*
const carrito = document.getElementById("carrito");
const productos = document.querySelector('#lista-carrito tbody');
const limpiarCarrito = document.getElementById('vaciarCarrito');
*/
const addProducto = document.getElementById("agregarProducto");

//Cuando se carga el navegador
EventListener();
function EventListener() {
	//se activa para añadir producto al carrito
	addProducto.addEventListener("click", comprarProducto);
	//cuando se elimina un curso
	carrito.addEventListener("click", eliminarProducto);
	//cuando se vacia un carrito
	limpiarCarrito.addEventListener("click", cleanCarrito);
	//al recargar obtener la data desde el localStorage
	//document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarProducto(e) {
	console.log(e);
}

function eliminarProducto() {
	console.log("desde eliminar producto");
}
function cleanCarrito() {
	console.log("desde eliminar carrito");
}
function leerLocalStorage() {
	console.log("desde localstorage");
}
