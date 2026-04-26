// 2. Entrega de paquetes con tiempos variables
// Enunciado
// Una empresa de mensajería tiene varios paquetes para entregar. Cada entrega tarda un
// tiempo distinto y el sistema debe ejecutar todas las entregas en paralelo. Al final debe
// mostrar cuáles paquetes se entregaron primero y consolidar un resumen final.
// Requerimientos
// • Ejecutar entregas de forma simultánea.
// • Registrar orden real de finalización.
// • Mostrar errores si alguna entrega falla.
// • Consolidar un informe final.
// Datos de entrada
// • Lista de paquetes (ID + tiempo estimado de entrega).
// Datos de salida
// • Resultado de cada entrega.
// • Orden en que finalizó cada una.
// • Informe final consolidado.



const entregarPaquete = (paquete) => {
    return new Promise((resolve, reject) => {
        console.log(` Enviando paquete ${paquete.id}...`);

        setTimeout(() => {
            // Simular error aleatorio
            const fallo = Math.random() < 0.2;

            if (fallo) {
                console.log(`Error en paquete ${paquete.id}`);
                reject({
                    id: paquete.id,
                    estado: "fallido"
                });
            } else {
                console.log(` Entregado paquete ${paquete.id}`);
                resolve({
                    id: paquete.id,
                    estado: "entregado"
                });
            }
        }, paquete.tiempo);
    });
};

// Función principal (paralela)
const procesarEntregas = async (paquetes) => {
    console.log(" Iniciando entregas en paralelo...\n");

    const inicioTotal = Date.now();
    const ordenFinalizacion = [];

    const promesas = paquetes.map(paquete =>
        entregarPaquete(paquete)
            .then(res => {
                ordenFinalizacion.push(res);
                return res;
            })
            .catch(err => {
                ordenFinalizacion.push(err);
                return err; // para que no rompa Promise.all
            })
    );

    const resultados = await Promise.all(promesas);

    const finTotal = Date.now();
    const tiempoTotal = (finTotal - inicioTotal) / 1000;

    console.log("\n Orden real de finalización:");
    ordenFinalizacion.forEach((p, i) => {
        console.log(`${i + 1}. Paquete ${p.id} - ${p.estado}`);
    });

    console.log("\nInforme final:");
    resultados.forEach(p => {
        console.log(`Paquete ${p.id}: ${p.estado}`);
    });

    console.log(`\nTiempo total: ${tiempoTotal}s`);

    return {
        resultados,
        ordenFinalizacion,
        tiempoTotal
    };
};


export {
    procesarEntregas
};