/*
Ejercicio integrador 2:
Centro de Procesamiento de Órdenes
Vamos a simular un centro que procesa órdenes de forma asincrónica. Cada orden requiere pasar por varios pasos: verificación, procesamiento, registro y notificación. Algunos pasos tardan más tiempo que otros y debemos garantizar que el sistema no se bloquee. Usaremos callbacks, promesas y async/await dentro del mismo ejercicio para comparar cómo evoluciona el flujo.
Este ejercicio exige analizar: tiempos, dependencias, orden de ejecución y estructura del código.
Requerimientos del programa
Datos de entrada
• Una lista de órdenes en un arreglo, por ejemplo:
const ordenes = [
{ id: 1, cliente: "Ana", monto: 120000 },
{ id: 2, cliente: "Luis", monto: 80000 },
{ id: 3, cliente: "María", monto: 150000 }
];
• Tiempos simulados de los procesos:
• Verificación: 1500 ms
• Procesamiento: 2000 ms
• Registro: 1000 ms
• Notificación: 500 ms
Datos de salida esperados
• Mensajes con marcas de tiempo que permitan determinar:
o Duración total del proceso por orden
o Orden de ejecución real
o Identificación de procesos paralelos y procesos secuenciales
• Un reporte final indicando qué órdenes se completaron y en qué tiempos.
Tareas
1. Primera parte (Callbacks):
o Implementar el flujo completo de una sola orden usando callbacks.
o Analizar el tiempo total.
o Identificar visualmente el “callback hell” y documentarlo.
2. Segunda parte (Promesas + then):
o Reescribir el mismo proceso usando promesas.
o Validar si la estructura se vuelve más clara.
o Registrar tiempos.
3. Tercera parte (Async/Await):
o Implementar el procesamiento de todas las órdenes con async/await.
o Procesarlas en serie (una detrás de otra).
o Luego procesarlas en paralelo (todas a la vez).
o Comparar tiempos y justificar la diferencia.
*/

const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

const tiempos = {
    verificacion: 1500,
    procesamiento: 2000,
    registro: 1000,
    notificacion: 500
};

const consultaCallbacks = (orden, tiempo, callback) => {
    const { verificacion, procesamiento, registro, notificacion } = tiempo;

    const Inicio = Date.now();

    console.log(`Iniciando proceso de orden ${orden.id} para cliente ${orden.cliente}...`);
    
    setTimeout(() => {
        console.log(`Orden ${orden.id}: Verificación completada.`);
        
        setTimeout(() => {
            console.log(`Orden ${orden.id}: Procesamiento completado.`);
            
            setTimeout(() => {
                console.log(`Orden ${orden.id}: Registro completado.`);
                
                setTimeout(() => {
                    console.log(`Orden ${orden.id}: Notificación enviada.`);
                    callback();

                    const Fin = Date.now();

                    console.log(`Tiempo total del proceso de orden ${orden.id} (con callbacks): ${Fin - Inicio} ms`);
    
                }, notificacion);
    
            }, registro);
    
        }, procesamiento);
    
    }, verificacion);

    // Se puede observar el callback hell en la función, considerando que cada proceso se encuentra anidado dentro de un setTimeout que, a su vez, se encuentra al interior de otro setTimeout. Lo anterior, hace difícil leer el código, entender su flujo y su mantenimiento. Así mismo, como resultado, se puede observar un tiempo ligeramente superior a los 5000 ms esperados, posiblemente atribuibles a los callbacks anidados.
};

const consultaPromesas = (orden, tiempo) => {
    const { verificacion, procesamiento, registro, notificacion } = tiempo;

    const Inicio = Date.now();

    return new Promise((resolve) => {
        console.log(`Iniciando proceso de orden ${orden.id} para cliente ${orden.cliente}...`);
        
        setTimeout(() => {
            console.log(`Orden ${orden.id}: Verificación completada.`);
            
            setTimeout(() => {
                console.log(`Orden ${orden.id}: Procesamiento completado.`);
                
                setTimeout(() => {
                    console.log(`Orden ${orden.id}: Registro completado.`);
                    
                    setTimeout(() => {
                        console.log(`Orden ${orden.id}: Notificación enviada.`);
                    
                        resolve();

                        const Fin = Date.now();

                        console.log(`Tiempo total del proceso de orden ${orden.id} (con promesas): ${Fin - Inicio} ms`);
                    
                    }, notificacion);
                
                }, registro);
            
            }, procesamiento);
        
        }, verificacion);
    
    });

    // En comparación con el uso de callbacks, las promesas no cambian mucho la estructura del código, considerando nuevamente el uso de setTimeaout anidados. El uso de resolve, sin embargo, permite una mejor forma de tratar los errores, lo cual no era permitido en el uso de callbacks. Así mismo, el tiempo total del proceso se mantiene ligeramente superior a los 5000 ms esperados (aunque un poco menos que con los callbacks, en general, pero no los suficientes como para ser tenidos en cuenta), posiblemente atribuibles a los setTimeout anidados.    
};

const consultaAsyncAwait = async (orden, tiempo) => {
    const { verificacion, procesamiento, registro, notificacion } = tiempo;

    const Inicio = Date.now();

    console.log(`Iniciando proceso de orden ${orden.id} para cliente ${orden.cliente}...`);

    await new Promise((resolve) => setTimeout(() => {
        console.log(`Orden ${orden.id}: Verificación completada.`);
        
        resolve();
    }, verificacion));

    await new Promise((resolve) => setTimeout(() => {
        console.log(`Orden ${orden.id}: Procesamiento completado.`);
        
        resolve();
    }, procesamiento));

    await new Promise((resolve) => setTimeout(() => {
        console.log(`Orden ${orden.id}: Registro completado.`);
        
        resolve();
    }, registro));

    await new Promise((resolve) => setTimeout(() => {
        console.log(`Orden ${orden.id}: Notificación enviada.`);

        resolve();

        const Fin = Date.now();

        console.log(`Tiempo total del proceso de orden ${orden.id} (con async/await): ${Fin - Inicio} ms`);
    
    }, notificacion));

    // En comparación con el uso de callbacks y promesas, el uso de async/await permite una estructura de código mucho más clara, legible y fácil de mantener, considerando que cada proceso se encuentra en un bloque separado, sin anidamientos. Así mismo, el tiempo total del proceso se mantiene ligeramente superior a los 5000 ms esperados, posiblemente atribuibles a los setTimeout utilizados para simular cada proceso.    
};

const ejecutarEJInt2 = async () => {
    console.log("Simulando con callbacks");

    for (const orden of ordenes) {
        await consultaCallbacks(orden, tiempos, () => {
            console.log(`Proceso de orden ${orden.id} con callbacks finalizado.`);
        });
    }

    console.log("\nSimulando con promesas");

    for (const orden of ordenes) {
        await consultaPromesas(orden, tiempos);
        console.log(`Proceso de orden ${orden.id} con promesas finalizado.`);
    }

    console.log("\nSimulando con async/await");

    for (const orden of ordenes) {
        await consultaAsyncAwait(orden, tiempos);
        console.log(`Proceso de orden ${orden.id} con async/await finalizado.`);
    }
};

export { ejecutarEJInt2 };
