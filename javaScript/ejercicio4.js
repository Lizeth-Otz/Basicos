const contenido = document.getElementById("contenido");

for (let i = 5; i >= 1; i--) {
    console.log("for");
    for (let j = i; j >= 1; j--) {
        contenido.innerHTML += j;
     
    }
    contenido.innerHTML +=`<br>`;
    
    
}