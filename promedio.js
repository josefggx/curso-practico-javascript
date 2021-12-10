const lista = [];

const enviarNumero = () => {
    const input = document.getElementById("lista-Numeros")["value"];
    const value = input;
    lista.push(value);
    const mostrar = document.getElementById("mostrarLista");
    mostrar.innerText = "Tu lista actual lleva: (" + lista + "), si es correcto, presiona el botón 'Calcular promedio'"
}


const calcularPromedio1 = () => {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + Number(lista[i]);
    }

    const promedioLista = sumaLista / lista.length;

    const mostrarPromedio = document.getElementById("mostrarResultado");
    mostrarPromedio.innerText = "El promedio es: " + promedioLista;
}



