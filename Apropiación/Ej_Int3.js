/* Simulador de Consulta de Usuarios y Roles
Descripción general
Vamos a simular una aplicación que debe consultar información desde diferentes fuentes:
• Datos básicos del usuario
• Información de seguridad
• Roles y permisos
Algunas consultas son lentas y otras rápidas. El propósito es reconstruir el flujo completo, validar que la aplicación no se bloquee y comprender el orden real de los resultados.
Requerimientos del programa
Datos de entrada
• Un arreglo de IDs de usuarios:
const usuarios = [101, 102, 103, 104];
• Tiempos simulados:
• Consulta de usuario: 1200 ms
• Consulta de seguridad: 800 ms
• Consulta de roles: 2000 ms
• Registro final: 600 ms
Datos de salida esperados
• Para cada usuario, se debe generar un objeto como este:
{
id: 101,
nombre: "Usuario 101",
seguridad: "OK",
roles: ["admin", "ventas"],
tiempoTotal: "3.2 segundos"
}
• Registro final de la operación:
• Tiempo total del grupo
• Usuarios consultados en paralelo
• Identificación de cuellos de botella
Tarea
1. Construir una versión bloqueante (solo de demostración):
o Usar un ciclo que simule operaciones largas.
o Observar cómo el programa se congela.
o Documentar por qué no sirve este enfoque.
2. Versión asincrónica con Promesas:
o Consultar usuario → consultar seguridad → consultar roles → registrar.
o Este flujo debe ejecutarse de forma secuencial para cada usuario, pero en paralelo
entre usuarios.

3. Versión final con Async/Await:
o Implementar la misma lógica usando async/await.
o Registrar tiempos reales con Date.now().
o Contrastar con la ejecución basada en promesas.
*/

const id = [101, 102, 103, 104];

const roles = [
    "Gerente General / CEO",
    "Director Financiero / CFO",
    "Director de Operaciones / COO",
    "Gerente de Recursos Humanos",
    "Gerente de Marketing",
    "Gerente de Ventas",
    "Gerente de Tecnología / CIO",
    "Analista de Datos / BI",
    "Supervisor de Producción",
    "Asistente Administrativo"
];

const espera = (ms) => {
    const start = Date.now();

    while (Date.now() - start < ms) {
        // Espera activa (bloqueante)
    }
}

const consultaUsuarioBloqueante = (i) => {
    const usuarios ={};

    console.log("Demostración de código bloqueante");

    console.log(`Consultando usuario ${i}`);
    
    espera(1200);

    let nombre = `Usuario ${i}`;

    console.log("Consultando seguridad");

    espera(800);

    let seguridad = Math.random() > 0.5 ? "OK" : "FALLA";

    console.log("Consultando rol");

    espera(2000);

    let indice = Math.floor(Math.random() * roles.length);

    let rol = roles[indice];

    espera(600);

    console.log("Generando registro");

    console.log({
        id: id,
        nombre: nombre,
        seguridad: seguridad,
        rol: rol,
        tiempoTotal: "4.6 segundos"
    });
};

const rdUser = id[Math.floor(Math.random() * id.length)];

export {consultaUsuarioBloqueante};