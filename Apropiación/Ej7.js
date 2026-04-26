/*
Uso de Async/Await

Ejercicio:
Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.

Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.
*/

const saludoAsync = async () => {
    console.log("Iniciando saludo...");

    const rand = Math.random();
    
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand > 0.5) {
                resolve("Hola, usuario.");
            } else {
                reject(new Error("No se pudo saludar."));
            }
        }, 2000);
    });

    try {
        const resultado = await promesa;
        
        console.log(resultado);
        
    } catch (error) {
        console.error(error.message);
    }
};

export { saludoAsync };