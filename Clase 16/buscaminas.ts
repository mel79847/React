console.log("Esto es un buscaminas");

let listaElementos = document.querySelectorAll("td");

for (const elemento of listaElementos) {

    elemento.addEventListener("click", () => {

        console.log("Se hizo click");
        
        if (elemento.classList.contains("mina")) {
            console.log("Es una bomba");
            for (const celda of listaElementos) {

                celda.textContent = "💥";
                celda.style.color = "black";
            }
        } else {
            console.log("No es una bomba");
            console.log(elemento.textContent);
            elemento.style.color = "black";
        }
    });
}