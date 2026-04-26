/*
Procesamiento de pedidos con pasos obligatorios y opcionales
Enunciado
Un sistema de ventas debe procesar pedidos en el siguiente flujo:

Validar stock (obligatorio).
Calcular costos finales (obligatorio).
Generar recomendaciones al cliente (opcional).
Enviar factura electrónica (obligatorio, pero depende de los dos primeros pasos).
El aprendiz debe simular este proceso asincrónico controlando dependencias, tiempo de ejecución y manejo de errores.
Requerimientos
• Control estricto del orden de pasos obligatorios.
• Permitir que la recomendación se procese en paralelo sin bloquear el flujo.
• Generar factura solo si los pasos obligatorios son exitosos.
• Mostrar el orden real de ejecución y finalización.
Datos de entrada
• ID del pedido.
• Tiempos estimados por cada proceso.
Datos de salida
• Resultados individuales.
• Flujo real de ejecución.
• Factura generada o error del sistema.
*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const procesarPedido = async (pedidoId, tiempos) => {
  console.log(`Iniciando procesamiento del pedido ${pedidoId}`);
    try {
        const stockValido = await validarStock(tiempos.validarStock);

        console.log(`Stock validado para el pedido ${pedidoId}: ${stockValido}`);

        const costosCalculados = await calcularCostos(tiempos.calcularCostos);

        console.log(`Costos calculados para el pedido ${pedidoId}: ${costosCalculados}`);

        const facturaGenerada = await generarFactura(pedidoId, stockValido, costosCalculados);

        console.log(`Factura generada para el pedido ${pedidoId}: ${facturaGenerada}`);
    } catch (error) {
        console.error(`Error procesando el pedido ${pedidoId}: ${error.message}`);
    
    }

    console.log("¿Desea añadir recomendiaciones a su pedido? (S/N): ");

    const respuesta = prompt().toUpperCase();

    if (respuesta === "S") {
        console.log("Generando recomendaciones...");
            
        const recomendacionPromise = generarRecomendacion(tiempos.generarRecomendacion);

        recomendacionPromise.then(recomendacion => {
            console.log(`Recomendación generada para el pedido ${pedidoId}: ${recomendacion}`);
        }).catch(error => {
            console.error(`Error generando recomendación para el pedido ${pedidoId}: ${error.message}`);
        });
    } else {
        console.log("No se generarán recomendaciones para este pedido.");
    }
};

const validarStock = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stockDisponible = Math.random() > 0.5;

            if (stockDisponible) {
                resolve("Stock disponible");
            } else {
                reject(new Error("Stock no disponible"));
            }
        }, tiempo);
    });
};

const calcularCostos = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costosCalculados = Math.random() > 0.5;

            if (costosCalculados) {
                resolve("Costos calculados correctamente");
            } else {
                reject(new Error("Error al calcular costos"));
            }
        }, tiempo);
    });
};

const generarFactura = (pedidoId, stockValido, costosCalculados) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stockValido && costosCalculados) {
                resolve(`Factura para el pedido ${pedidoId} generada exitosamente`);
            } else {
                reject(new Error(`No se puede generar factura para el pedido ${pedidoId} debido a errores previos`));
            }
        }, 1000);
    });
};

const generarRecomendacion = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const recomendacionGenerada = Math.random() > 0.5;

            if (recomendacionGenerada) {
                resolve("Recomendación generada: Productos relacionados");
            } else {
                reject(new Error("Error al generar recomendación"));
            }
        }, tiempo);
    });
};

export { procesarPedido };