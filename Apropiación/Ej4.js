// 4. Encadenamiento de Callbacks (Callback Hell controlado)
// Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
// resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

// Función principal
export const ejecutarCallbackHell = () => {

    console.log("Inicio del proceso...\n");

    tomarDatos((datos) => {

        procesarDatos(datos, (datosProcesados) => {

            mostrarResultado(datosProcesados, () => {

                console.log("\nProceso completo ");

            });

        });

    });

};


// ----------- FUNCIONES -----------

const tomarDatos = (callback) => {
    setTimeout(() => {
        console.log("1.Tomando datos...");
        const datos = [1, 2, 3, 4, 5];
        callback(datos);
    }, 1000);
};


const procesarDatos = (datos, callback) => {
    setTimeout(() => {
        console.log("2.Procesando datos...");
        const resultado = datos.map(num => num * 2);
        callback(resultado);
    }, 1500);
};


const mostrarResultado = (datos, callback) => {
    setTimeout(() => {
        console.log("3.Mostrando resultado...");
        console.log("Resultado:", datos);
        callback();
    }, 1000);
};