// 1. Gestión de una cola de atención
// Enunciado
// Un módulo de soporte registra solicitudes de usuarios. Cada solicitud tarda un tiempo
// distinto en ser atendida. Aunque el sistema atiende cada solicitud por turno (una a la vez),
// el aprendiz debe simular el tiempo de espera, registrar el orden de atención y calcular la
// duración total del proceso.
// Requerimientos
// • Procesar solicitudes de manera secuencial.
// • Registrar inicio y fin de cada atención.
// • Identificar el tiempo total del proceso.
// • Usar asincronía controlada (callback, promesa o async/await).
// Datos de entrada
// • Lista de usuarios con un tiempo estimado de atención.
// Datos de salida
// • Orden real de atención.
// • Tiempo de atención por usuario.
// • Tiempo total del proceso.

// Simula la atención de un usuario
const atenderUsuario = async (usuario) => {
    console.log(`Iniciando atención: ${usuario.nombre}`);

    const inicio = Date.now();

    await new Promise(resolve => setTimeout(resolve, usuario.tiempo));

    const fin = Date.now();
    const duracion = (fin - inicio) / 1000;

    console.log(`Finalizó atención: ${usuario.nombre} (${duracion}s)`);

    return {
        nombre: usuario.nombre,
        tiempo: duracion
    };
};

// Función principal que procesa la cola
const procesarCola = async (usuarios) => {
    console.log("Iniciando atención de solicitudes...\n");

    const inicioTotal = Date.now();
    const resultados = [];

    for (const usuario of usuarios) {
        const resultado = await atenderUsuario(usuario);
        resultados.push(resultado);
    }

    const finTotal = Date.now();
    const tiempoTotal = (finTotal - inicioTotal) / 1000;

    console.log("\n Orden de atención:");
    resultados.forEach((u, i) => {
        console.log(`${i + 1}. ${u.nombre} - ${u.tiempo}s`);
    });

    console.log(`\n Tiempo total del proceso: ${tiempoTotal}s`);

    return {
        resultados,
        tiempoTotal
    };
};


export {
    procesarCola
};