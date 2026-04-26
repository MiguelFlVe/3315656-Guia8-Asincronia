// 5. Transformando Callbacks en Promesas
// Ejercicio:
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
// Meta: visualizar cómo mejora la legibilidad.

// Función principal
export const ejecutarPromesas = () => {

    console.log("Inicio del proceso con Promesas...\n");

    tomarDatos()
        .then((datos) => {
            return procesarDatos(datos);
        })
        .then((datosProcesados) => {
            return mostrarResultado(datosProcesados);
        })
        .then(() => {
            console.log("\nProceso completo");
        })
        .catch((error) => {
            console.log("Error:", error);
        });

};


// ----------- FUNCIONES -----------

const tomarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1.Tomando datos...");
            const datos = [1, 2, 3, 4, 5];
            resolve(datos);
        }, 1000);
    });
};


const procesarDatos = (datos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2.Procesando datos...");
            const resultado = datos.map(num => num * 2);
            resolve(resultado);
        }, 1500);
    });
};


const mostrarResultado = (datos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3.Mostrando resultado...");
            console.log("Resultado:", datos);
            resolve();
        }, 1000);
    });
};