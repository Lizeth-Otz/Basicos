const contenido = document.getElementById("contenido");

let num1;
do {
     num1= parseInt(prompt("Introduce un número"));
     contenido.innerHTML += num1;
} while (num1!=7);







