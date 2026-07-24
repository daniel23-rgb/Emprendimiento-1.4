function pedirProducto(btn, nombre) {
    const container = btn.parentElement;
    const input = container.querySelector('.qty-input');
    const cantidad = parseInt(input.value);
    alert(`¡Pedido realizado con éxito!\nHas pedido ${cantidad} unidad(es) de ${nombre}. ¡Gracias por tu compra!`);
}

function pedirPosterDesdePromo(btn, nombrePoster) {
    const card = btn.closest('.card');
    const stockNumSpan = card.querySelector('.stock-num');
    let stockActual = parseInt(stockNumSpan.textContent);

    if (stockActual <= 0) {
        alert("Lo sentimos, este póster ya se encuentra agotado.");
        return;
    }

    stockActual -= 1;
    stockNumSpan.textContent = stockActual;

    alert(`¡Pedido realizado con éxito!\nHas adquirido el póster de ${nombrePoster}.`);

    if (stockActual <= 0) {
        btn.disabled = true;
        btn.style.backgroundColor = "#ccc";
        btn.style.cursor = "not-allowed";
        btn.textContent = "Agotado";
    } else {
        btn.textContent = `Llevar este (${stockActual} disp.)`;
    }
}