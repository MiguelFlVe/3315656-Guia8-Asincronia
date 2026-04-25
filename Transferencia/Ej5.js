/* Integración de servicios: disponibilidad, datos del usuario, historial y recomendaciones
Enunciado
Un sistema central debe preparar la información de un usuario consultando cuatro servicios externos:

Servicio A: disponibilidad de un recurso.
Servicio B: información detallada del usuario.
Servicio C: historial de acciones.
Servicio D: motor de recomendaciones (depende de la información de los servicios B y C).
El aprendiz debe simular todo el flujo utilizando asincronía avanzada, integrando procesos dependientes y paralelos, registrando tiempo, orden y validaciones.
Requerimientos
• Ejecutar varios servicios en paralelo.
• Controlar dependencias del servicio D.
• Generar informe final unificado.
• Registrar tiempo total y tiempo por servicio.
• Manejar errores tanto aislados como globales.
Datos de entrada
• ID del usuario.
• Tiempo simulado por cada servicio.
• Parámetro que indica si algún servicio debe fallar (para evaluar manejo de errores).
Datos de salida
• Resultado de cada servicio.
• Informe central detallado.
• Orden real de finalización.
• Estado general del sistema (“Integración exitosa” o error general).
*/

const servicioA = (tiempo, fallo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallo) {
                reject('Error en Servicio A: Recurso no disponible');
            } else {
                resolve('Servicio A: Recurso disponible');
            }
        }, tiempo);
    });
};

const servicioB = (tiempo, fallo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallo) {
                reject('Error en Servicio B: Información del usuario no encontrada');
            } else {
                resolve('Servicio B: Información del usuario obtenida');
            }
        }, tiempo);
    });
};

const servicioC = (tiempo, fallo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallo) {
                reject('Error en Servicio C: Historial de acciones no disponible');
            } else {
                resolve('Servicio C: Historial de acciones obtenido');
            }
        }, tiempo);
    });
};

const servicioD = (tiempo, fallo, infoB, infoC) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallo) {
                reject('Error en Servicio D: Recomendaciones no generadas');
            } else {
                resolve(`Servicio D: Recomendaciones generadas basadas en ${infoB} y ${infoC}`);
            }
        }, tiempo);
    });
};

const ejecutarServicios = async (idUsuario, tiempos, fallos) => {
    const resultados = {};
    const tiemposServicio = {};
    const inicio = Date.now();

    try {
        const promesas = [
            servicioA(tiempos[0], fallos[0]).then(resultado => {
                resultados.servicioA = resultado;
                tiemposServicio.servicioA = (Date.now() - inicio) / 1000;
            }),
            servicioB(tiempos[1], fallos[1]).then(resultado => {
                resultados.servicioB = resultado;
                tiemposServicio.servicioB = (Date.now() - inicio) / 1000;
            }),
            servicioC(tiempos[2], fallos[2]).then(resultado => {
                resultados.servicioC = resultado;
                tiemposServicio.servicioC = (Date.now() - inicio) / 1000;
            })
        ];
        await Promise.all(promesas);

        resultados.servicioD = await servicioD(tiempos[3], fallos[3], resultados.servicioB, resultados.servicioC);
        
        tiemposServicio.servicioD = (Date.now() - inicio) / 1000;
        
        const informe = {
            idUsuario,
            resultados,
            tiemposServicio,
            estado: 'Integración exitosa'
        };

        console.log(informe);

    } catch (error) {
        const informe = {
            idUsuario,
            resultados,
            tiemposServicio,
            estado: `Error general: ${error}`
        };
        console.log(informe);
    }
};



export { ejecutarServicios };