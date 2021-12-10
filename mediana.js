const lista = [];

const enviarNumero = () => {
    const input = document.getElementById("lista-Numeros")["value"];
    const value = input;
    lista.push(value);
    const mostrar = document.getElementById("mostrarLista");
    mostrar.innerText = "Tu lista actual lleva: (" + lista + "), si es correcto, presiona el botón 'Calcular mediana'"
}

const calcularPromedio = (lista) => {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + Number(lista[i]);
    }
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const calcularMediana = () => {
    let mediana;
    const listaOrdenada = lista.sort((a, b) => a - b);
    // @ts-ignore
    const mitadLista = parseInt(listaOrdenada.length / 2);
    if(esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]

        const promedio = calcularPromedio([elemento1, elemento2]);
        mediana = promedio;
    } else {
        mediana = lista[mitadLista];
    }
    const mostrarMediana = document.getElementById("mostrarResultado");
    mostrarMediana.innerText = "La mediana es: " + mediana;
}





// const calcularPromedio1 = () => {
//     let sumaLista = 0;
//     for(let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + Number(lista[i]);
//     }

//     const promedioLista = sumaLista / lista.length;

//     



