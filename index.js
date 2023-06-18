//Descuentos

let nombreUsuario = prompt('Ingrese su nombre ')
let bienvenidaPagina = prompt('Bienvenido ' + nombreUsuario + ' ,que esta buscando, velas, difusores o home spay?')
if ((bienvenidaPagina === 'velas') || (bienvenidaPagina === 'Velas') || (bienvenidaPagina === 'vela') || (bienvenidaPagina === 'Vela')) {

    console.log('hoy las velas tienen un 20% de descuento')

    // Obtener el precio original del producto
    let precioVela = 1500;

    // Obtener el porcentaje de descuento
    let porcentajeDescuento = 20;

    // Calcular el monto del descuento
    let montoDescuento = precioVela * (porcentajeDescuento / 100);

    // Calcular el precio con descuento
    let precioConDescuento = precioVela - montoDescuento;

    console.log("Precio original: $" + precioVela);
    console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
    console.log("Monto de descuento: $" + montoDescuento);
    console.log("Precio con descuento: $" + precioConDescuento);
    console.log('Bienvenido a Fiore di loto')

} 

if ((bienvenidaPagina === 'difusores') || (bienvenidaPagina === 'Difusores') || (bienvenidaPagina === 'difusor') || (bienvenidaPagina === 'Difusor')) {

    console.log('hoy los difusores tienen un 15% de descuento')

    // Obtener el precio original del producto
    let precioDifusor = 1500;

    // Obtener el porcentaje de descuento
    let porcentajeDescuento = 15;

    // Calcular el monto del descuento
    let montoDescuento = precioDifusor * (porcentajeDescuento / 100);

    // Calcular el precio con descuento
    let precioConDescuento = precioDifusor - montoDescuento;

    console.log("Precio original: $" + precioDifusor);
    console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
    console.log("Monto de descuento: $" + montoDescuento);
    console.log("Precio con descuento: $" + precioConDescuento);
    console.log('Bienvenido a Fiore di loto')

} 

if ((bienvenidaPagina === 'home spray') || (bienvenidaPagina === 'Home spray') || (bienvenidaPagina === 'spray') || (bienvenidaPagina === 'home')) {
    console.log('hoy los home spray tienen un 25% de descuento')

    // Obtener el precio original del producto
    let precioSpray = 1400;

    // Obtener el porcentaje de descuento
    let porcentajeDescuento = 25;

    // Calcular el monto del descuento
    let montoDescuento = precioSpray * (porcentajeDescuento / 100);

    // Calcular el precio con descuento
    let precioConDescuento = precioSpray - montoDescuento;

    console.log("Precio original: $" + precioSpray);
    console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
    console.log("Monto de descuento: $" + montoDescuento);
    console.log("Precio con descuento: $" + precioConDescuento);
    console.log('Bienvenido a Fiore di loto')

}



//Calculadora de productos a futuro (en este caso llevaria 2 velas...)


if ((bienvenidaPagina === 'velas') || (bienvenidaPagina === 'Velas') || (bienvenidaPagina === 'vela') || (bienvenidaPagina === 'Vela')) {

function calculadoraProductos(numero1, numero2, operacion) {
    switch (operacion) {
        case '+':
            return numero1 + numero2
            break
        case '*':
            return numero1 * numero2
            break
        default:
            return 'debe definir una operacion como + o *'
            break
    }
}

let resultado = calculadoraProductos(1500, 2, '*')

console.log (resultado)
}