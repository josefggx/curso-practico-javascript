
const listaModa = [];

const enviarNumeroModa = () => {
    const input = document.getElementById("lista-Numeros")["value"];
    const value = input;
    listaModa.push(value);
    const mostrar = document.getElementById("mostrarLista");
    mostrar.innerText = "Tu lista actual lleva: (" + listaModa + "), si es correcto, presiona el botón 'Calcular moda'"
}

const calcularModa = () => {
    const listaCount = {};
    listaModa.map(
        function (elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] = listaCount[elemento] + 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );
    const moda = listaArray[listaArray.length - 1]
    const mostrar = document.getElementById("mostrarResultado");
    mostrar.innerText = "La moda es " + moda[0] + ", y se repite " + moda[1] + " veces.";
}



