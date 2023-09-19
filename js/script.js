function obtenerPlatoNuevo() {
  return `
        <div class="conteiner-horizontal">
          <label for="itemSelect">Plato</label>
            <select id="itemSelect" name="itemSelect">
              <option value="ensalada">Ensalada de hojas verdes</option>
              <option value="salmon">Salmón con arroz</option>
              <option value="pizza">Pizza de muzzarella</option>
              <option value="sushi">Sushi - 12 piezas</option>
              <option value="tacos">Tacos mixtos</option>
              <option value="hamburguesa">Hamburguesa con cheddar</option>
              <option value="torta">Torta de vainilla con crema</option>
            </select>

            <label for="cantidad">Cantidad</label>
            <input type="number" id="cantidad" name="cantidad" min="1" required />
        </div>
    `;
}

function agregarAlPedido() {
  // Al hacer click en agregar al pedido disparar un confirm preguntando si desea agregar otro plato
  //      Si elige que sí:
  //          - Agregar en el div con id 'platos' otro label con su respectivo select para seleccionar el plato
  //          - Agregar  en el div con id 'platos' en pedidoForm otro label con su respectivo input para seleccionar la cantidad
  //
  //      Si elige que no, enviar:
  //          - Llamar a la funcion enviar()
  // https://www.w3schools.com/js/js_popup.asp
  if (
    confirm(
      "¿Querés agregar otro plato?\nSi elige 'Cancelar' se enviara el pedido asi"
    )
  ) {
    const nuevoPlato = document.createElement("div");
    nuevoPlato.innerHTML = obtenerPlatoNuevo();
    document.getElementById("platos").appendChild(nuevoPlato);
  } else {
    enviar();
  }
}

function enviar() {
  alert("Enviando...");
  // TODO:
  //      Si el usuario elige enviar:
  //          - Parsear cantidad a numero y verificar cantidad > 0 (parseInt())
  //          - El select debe tener una opcion seleccionada (elemento.selectedIndex > 0)
  //      Si las validaciones estan ok:
  //          - Mostrar un alert indicando que el pedido esta en preparacion
  //          - Resetear campos
}
