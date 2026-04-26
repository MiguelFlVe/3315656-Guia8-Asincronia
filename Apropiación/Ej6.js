/* 
Manejo de errores con Promesas
Ejercicio: Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y reject.
Meta: entender .catch() y la importancia del manejo de errores.
*/

const procesoConError = () => {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.5;

        setTimeout(() => {
            if (exito) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
})};

const ejecutarProceso = async () => {
    console.log(`Simulando proceso con 50% de probabilidad de fallar`);
    
    await procesoConError()
        .then(() => {
            console.log('Proceso exitoso');
        })
        .catch(() => {
            console.log('Ocurrió un error en el proceso');
        });
};

export { ejecutarProceso };