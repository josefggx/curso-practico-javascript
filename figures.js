// Código del cuadrado

console.group("Cuadrado");

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();
// Código del triángulo
console.group("Triángulo");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();


// Código del círculo
console.group("Círculo")

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => (radio * radio) * Math.PI;

console.groupEnd()

// Funcion reto: Calcular altura del triángulo isósceles

const alturaTriangulo = (lado1, lado2, base) => {
    if(lado1 === lado2 && lado1 != base) {
        return Math.sqrt(lado1 ** 2 - (base ** 2 / 4));
    } else if(lado1 === base && lado1 != lado2) {
        return Math.sqrt(lado1 ** 2 - (lado2 ** 2 / 4));
    } else if(lado2 === base && lado2 != lado1) {
        return Math.sqrt(lado2 ** 2 - (lado1 ** 2 / 4));
    }
    alert("El triángulo no es isósceles")
}




// Aquí interactuamos con el HTML
// Cuadrado
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("input-cuadrado");
    // @ts-ignore
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("input-cuadrado");
    // @ts-ignore
    const value = Number(input.value);
    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("input-triangulo-lado1");
    const input2 = document.getElementById("input-triangulo-lado2");
    const input3 = document.getElementById("input-triangulo-base")
    // @ts-ignore
    const value1 = Number(input1.value);
    // @ts-ignore
    const value2 = Number(input2.value);
    // @ts-ignore
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

const calcularAreaTriangulo = () => {
    const input1 = document.getElementById("input-triangulo-base");
    const input2 = document.getElementById("input-triangulo-altura");
    // @ts-ignore
    const value1 = Number(input1.value);
    // @ts-ignore
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1, value2);
    alert(area);
}

// Circulo
const calcularPerimetroCirculo = () => {
    const input = document.getElementById("input-circulo");
    // @ts-ignore
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("input-circulo");
    // @ts-ignore
    const value = Number(input.value);
    const perimetro = areaCirculo(value);
    alert(perimetro);
}