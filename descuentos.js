
const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);

    return precioConDescuento;
}

const onclickPriceDiscount = () => {
    const inputPrice = document.getElementById("input-price")
    // @ts-ignore
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("input-discount")
    // @ts-ignore
    const valueDiscount = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    const result = document.getElementById("result-p");
    result.innerText = "El precio con descuento son: $" + precioConDescuento;
}