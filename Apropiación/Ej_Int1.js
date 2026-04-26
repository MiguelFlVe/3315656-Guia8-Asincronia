// Ejercicio integrador 1:
// Simular un proceso de “consulta de usuario”, que requiere:
// 1. “Buscar usuario” (promesa de 1 segundo)
// 2. “Consultar permisos” (promesa de 2 segundos)
// 3. “Generar reporte final” (promesa de 1 segundo)
// Realizarlo en tres versiones:
// • Con callbacks
// • Con promesas
// • Con async/await

// 1. VERSION CALLBACKS
export const consultaCallbacks = () => {
    console.log("=== CALLBACKS ===");

    setTimeout(() => {
        console.log("Usuario encontrado");

        setTimeout(() => {
            console.log("Permisos consultados");

            setTimeout(() => {
                console.log("Reporte generado");
            }, 1000);

        }, 2000);

    }, 1000);
};

// 2. VERSION PROMESAS
export const consultaPromesas = () => {
    console.log("=== PROMESAS ===");

    const buscarUsuario = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Usuario encontrado");
                resolve();
            }, 1000);
        });
    };

    const consultarPermisos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Permisos consultados");
                resolve();
            }, 2000);
        });
    };

    const generarReporte = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Reporte generado");
                resolve();
            }, 1000);
        });
    };

    buscarUsuario()
        .then(consultarPermisos)
        .then(generarReporte);
};

// 3. VERSION ASYNC/AWAIT
export const consultaAsync = async () => {
    console.log("=== ASYNC/AWAIT ===");

    const esperar = (mensaje, tiempo) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(mensaje);
                resolve();
            }, tiempo);
        });
    };

    await esperar("Usuario encontrado", 1000);
    await esperar("Permisos consultados", 2000);
    await esperar("Reporte generado", 1000);
};