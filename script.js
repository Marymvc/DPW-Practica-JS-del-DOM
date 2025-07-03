let carrito = [];

function agregarProducto(nombre, precioBs) {
  carrito.push({ nombre, precioBs });
  renderCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

function renderCarrito() {
  const carritoDiv = document.getElementById('carrito');
  carritoDiv.innerHTML = '';

  carrito.forEach((producto, index) => {
    const item = document.createElement('div');
    item.textContent = `${producto.nombre} - Bs ${producto.precioBs}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'eliminar';
    btnEliminar.onclick = () => eliminarProducto(index);

    item.appendChild(btnEliminar);
    carritoDiv.appendChild(item);
  });

  calcularTotal();
}

function calcularTotal() {
  const total = carrito.reduce((sum, producto) => sum + producto.precioBs, 0);
  document.getElementById('total').textContent = `Total: Bs ${total}`;
}