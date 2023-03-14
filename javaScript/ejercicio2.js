const contenido = document.getElementById("contenido");
const num1 = prompt("Introduce la primera calificación");
const num2 = prompt("Introduce la segundo calificación");
const num3 = prompt("Introduce la tercera calificación");

let media = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;
 if (media > 8) {
    contenido.innerHTML = "Excelente";
 } else if (media > 5 && media <8) {
    contenido.innerHTML = "Aprobado";
 }else{
    contenido.innerHTML = "Suspendido";
 }