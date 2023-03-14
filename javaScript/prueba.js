//const contenido = document.getElementById("contenido");

    const num1 = prompt("Introduce un número");
    const num2 = prompt("Introduce un segundo numero");

    let suma = parseInt(num1) + parseInt(num2);
    console.log(suma);

    let resta = num1 - num2;
    console.log(resta);

    let multiplicacion = num1 * num2;
    console.log(multiplicacion);

    let division = num1 / num2;
    console.log(division);
    document.getElementById("contenido").innerHTML =`La suma es: ${suma}<br> La resta es: ${resta}<br>La multiplicación es: ${multiplicacion}<br> La división es: ${division} `;



//contenido.innerHTML = `La suma es: ${suma}<br> La resta es: ${resta}<br>La multiplicación es: ${multiplicacion}<br> La división es: ${division} `;
