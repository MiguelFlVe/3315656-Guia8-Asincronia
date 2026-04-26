// 3. Manejo de asincronía con Callbacks
// Ejercicio:
// Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de
// 3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido
// entregado”.


export function procesarPedido(callback) {
    console.log("Procesando pedido...");

    setTimeout(() => {
        console.log("Pedido listo");
        callback(); // se ejecuta el callback
    }, 3000);
}