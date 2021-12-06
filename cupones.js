const coupons = {
    "Jose_es_Batman": 15,
    "pero_no_le_digas_a_nadie": 30,
    "es_un_secreto": 25,
};


const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);
    return precioConDescuento;
}

const onclickPriceCoupon = () => {
    const inputPrice = document.getElementById("input-price")
    // @ts-ignore
    const valuePrice = inputPrice.value;
    const inputCupon = document.getElementById("input-coupon");
    // @ts-ignore
    const valueCupon = inputCupon.value;
    const cuponDefault = 0;
    const cuponDescuento = coupons[valueCupon] || cuponDefault;
    const precioConDescuento = calcularPrecioConDescuento(valuePrice, cuponDescuento);
    const result = document.getElementById("result-p");
    if(cuponDescuento == cuponDefault) {
        return result.innerText = "Cupón inválido"
    }
    result.innerText = "El precio con descuento son: $" + precioConDescuento;
}