const Torta = 100;
const Tarta = 200;
const Alfajor = 300;
const Porcion = 400;

alert("Lista de productos y precios: \n 1. Torta   $100\n 2. Tarta   $200\n 3. Alfajor   $300\n 4. Porcion   $400");
let eleccion = prompt("¿Qué producto desea? Elegir por el nombre: \n 1. Torta \n 2. Tarta \n 3. Alfajor \n 4. Porcion" + "\n\n O bien, ingrese 'Salir' para finalizar");

function sumarPrecioAlImporteFinal(precio) {
    importeFinal += precio;
}

let importeFinal = 0;

while (eleccion !== null) {
    eleccion = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase().trimEnd();
    
    if (eleccion === "Salir") {
        if(importeFinal > 0){
            alert("Este es el importe final de tus productos seleccionados: $" + importeFinal);
        }
        alert("Gracias por su visita");
        break;
    }

    let precioEleccion = 0;

    switch (eleccion) {
        case "Torta":
            precioEleccion = Torta;
            break;
        case "Tarta":
            precioEleccion = Tarta;
            break;
        case "Alfajor":
            precioEleccion = Alfajor;
            break;
        case "Porcion":
            precioEleccion = Porcion;
            break;
        default:
            alert("Opción no válida");
            eleccion = "";
    }

    sumarPrecioAlImporteFinal(precioEleccion);    

    eleccion = prompt(`Usted a ingresado ${eleccion} \n\n ¿Desea agregar otro producto?\n\n Lista de productos y precios: \n 1. Torta   $100\n 2. Tarta   $200\n 3. Alfajor   $300\n 4. Porcion   $400\n\n O bien, ingrese 'Salir' para finalizar`);
}