let nombre = prompt("Ingresa tu nombre")
let cantidad_prod
let salir = false

function valida_numero(numero) {
    while (numero < 0 || isNaN(numero)) {
        numero = Number(prompt("Ingrese un valor numérico mayor o igual a 0"))
    }
    return numero
}

while (salir != true) {

    cantidad_prod = Number(prompt("Hola " + nombre + "! Por favor, ingresa la cantidad de productos distintos que comprarás hoy"))
    cantidad_prod = valida_numero(cantidad_prod)

    if (cantidad_prod == 0) {
        alert("Gracias.  Te esperamos para tu próxima compra")
    } else if (cantidad_prod >= 10) {
        alert("Lo sentimos.  No contamos con tanta variedad de productos")
    } else {
        let total = 0
        for (let i = 1; i <= cantidad_prod; i++) {
            let cantidad = Number(prompt("Ingrese la cantidad a comprar del producto " + i))
            cantidad = valida_numero(cantidad)
            let precio = Number(prompt("Ingrese el precio del producto " + i))
            precio = valida_numero(precio)
            total = total + cantidad * precio
        }
        alert("El total de su compra es $" + total)
        alert("Muchas gracias por su compra. Vuelva pronto")
    }
    salir = confirm("Desea salir de la tienda?")
}
