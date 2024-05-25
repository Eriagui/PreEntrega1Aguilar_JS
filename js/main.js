let nombre = prompt("Ingresa tu nombre")
let salir = false


function valida_numero(numero) {
    if (numero < 0 || isNaN(numero)) {
        numero_valido = false
    } else {
        numero_valido = true
    }
    return numero_valido
}

while (salir != true) {

    let cantidad_prod = 0
    let cantidad = 0
    let precio = 0
    let valido = false

    while (valido == false) {
        cantidad_prod = Number(prompt("Hola " + nombre + "! Por favor, ingresa la cantidad de productos distintos que comprarás hoy. Ésta debe ser un valor numérico mayor o igual a 0"))
        valido = valida_numero(cantidad_prod)
    }

    if (cantidad_prod == 0) {
        alert("Lo esperamos en su próxima compra")
    } else if (cantidad_prod >= 10) {
        alert("Lo sentimos.  No contamos con tanta variedad de productos")
    } else {
        let total = 0
        for (let i = 1; i <= cantidad_prod; i++) {
            valido = false
            while (valido == false) {
                cantidad = Number(prompt("Ingrese la cantidad a comprar del producto " + i + " Ésta debe ser un valor numérico mayor o igual a 0"))
                valido = valida_numero(cantidad)
            }
            valido = false
            while (valido == false) {
                precio = Number(prompt("Ingrese el precio del producto " +i+ " Éste debe ser un valor numérico mayor o igual a 0"))
                valido = valida_numero(precio)
            }
            total = total + cantidad * precio
        }
        alert("El total de su compra es $" + total)
        alert("Muchas gracias por su compra. Vuelva pronto")
    }
    salir = confirm("Desea salir de la tienda?")
}
