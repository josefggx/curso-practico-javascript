// Helpers
const esPar = numerito => {
    return (numerito % 2 === 0)
}

const calcularPromedio = (lista) => {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + Number(lista[i]);
    }
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
const medianaSalarios = lista => {
    // @ts-ignore
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularPromedio([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


// Mediana general
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
)

const salariosColSorted = salariosCol.sort((a, b) => a - b);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana del top 10%

const sliceStart = (salariosColSorted.length * 90) / 100;
const sliceEnd = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.slice(sliceStart, sliceEnd);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
