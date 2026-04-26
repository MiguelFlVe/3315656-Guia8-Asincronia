// Función principal
export const validarFormulario = (usuario) => {

    console.log("Iniciando validación...\n");

    const inicio = Date.now();

    const validaciones = [
        validarCorreo(usuario.correo),
        validarDocumento(usuario.documento),
        validarUsuario(usuario.nombre)
    ];

    Promise.allSettled(validaciones)
        .then((resultados) => {

            const estados = {
                correo: resultados[0],
                documento: resultados[1],
                usuario: resultados[2]
            };

            console.log("\nEstados individuales:");
            console.log(estados);

            // Verificar si todas fueron exitosas
            const todoOk = resultados.every(r => r.status === "fulfilled");

            const fin = Date.now();
            const tiempoTotal = fin - inicio;

            console.log("\nTiempo total:", tiempoTotal, "ms");

            if (todoOk) {
                console.log("\nFormulario validado");
            } else {
                console.log("\nValidación fallida");
            }

        })
        .catch((error) => {
            // Error global (raro con allSettled, pero por si acaso)
            console.log("Error global:", error);
        });
};



// ----------- VALIDACIONES -----------

const validarCorreo = (correo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Validando correo...");
            
            if (correo.includes("@")) {
                resolve("Correo válido");
            } else {
                reject("Correo inválido");
            }

        }, 1000);
    });
};


const validarDocumento = (documento) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Validando documento...");
            
            if (documento.length >= 5) {
                resolve("Documento válido");
            } else {
                reject("Documento inválido");
            }

        }, 1500);
    });
};


const validarUsuario = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Validando usuario...");
            
            if (nombre !== "") {
                resolve("Usuario disponible");
            } else {
                reject("Usuario no disponible");
            }

        }, 1200);
    });
};