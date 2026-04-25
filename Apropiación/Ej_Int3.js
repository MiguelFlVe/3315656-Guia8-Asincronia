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

import promptSync from 'prompt-sync';
const prompt = promptSync();

const consultaUsuarioBloqueante = (id, roles) => {
    const espera = (ms) => {
        const start = Date.now();

        while (Date.now() - start < ms) {
            // Espera activa (bloqueante)
        }
    };

    console.log("Demostración de código bloqueante");

    for (let i of id) {
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

        console.log("Generando registro");

        espera(600);

        console.log({
            id: i,
            nombre: nombre,
            seguridad: seguridad,
            rol: rol,
            tiempoTotal: "4.6 segundos"
        });
    }

    console.log("Este enfoque no funciona, debido a que el tiempo de registro, en caso de que se reciba una lista muy larga de usuarios, se haría extremadamente largo. En consecuencia, haría que la espera de los procesos se volviera un procedimiento insostenible en la práctica");
    
};

const consultaUsuarioPromesa = (id, roles) => {
    let continuar = true;

    const espera = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    
    while (continuar) {
        console.log("Seleccione el usuario a registrar: \n1. 101 \n2. 102 \n3. 103 \n4. 104 \n5. No registrar");

        const usreg = Number(prompt());

        const select = id[usreg - 1];

        const flujousuario = (select) => {
            let usuario = {id: select};

            console.log(`Consultando usuario ${select}`);

            espera(1200).then(() => {
                usuario = { ...usuario, nombre: `Usuario ${select}` };

                espera(800).then(() => {
                    usuario = { ...usuario, seguridad: Math.random() > 0.5 ? "OK" : "FALLA"};

                    espera(2000).then(() => {
                        usuario = { ...usuario, rol: roles[Math.floor(Math.random() * roles.length)]};

                        espera(600).then(() => {
                            console.log(`Registro generado para usuario ${select}, por medio de promesas:`);
                            
                            console.log(usuario);
                        });

                    });
                });
            });
        }

        switch (usreg) {
            case 1:
                flujousuario(select);

                break;

            case 2:
                flujousuario(select);
                
                break;

            case 3:
                flujousuario(select);
                
                break;

            case 4:
                flujousuario(select);
                
                break;
        
            case 5:
                console.log("Terminando registros.");
                
                continuar = false;

                return;
            
            default:
                break;
        };
    
    };

};

const consultaUsuarioAsyncAwait = (id, roles) => {
    let continuar = true;

    const espera = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    
    while (continuar) {
        console.log("Seleccione el usuario a registrar: \n1. 101 \n2. 102 \n3. 103 \n4. 104 \n5. No registrar");

        const usreg = Number(prompt());
        
        const select = id[usreg - 1];

        const flujousuario = async (i) => {
            await espera(1200);
            
            let usuario = {id: i, nombre: `Usuario ${select}`};

            await espera(800);

            usuario = { ...usuario, seguridad: Math.random > 0.5 ? "OK" : "Falla"};

            await espera(2000);

            usuario = { ...usuario, rol: roles[Math.floor(Math.random() * roles.length)]};

            await espera(600);

            console.log(`Registro generado para usuario ${select}, por medio de Async/await:`);
            
            
            console.log(usuario);

        }

        switch (usreg) {
            case 1:
                flujousuario(select)
                
                break;

            case 2:
                flujousuario(select)
                
                break;

            case 3:
                flujousuario(select)
                
                break;

            case 4:
                flujousuario(select)
                
                break;

            case 5:
                console.log("Terminando programa.");
                
                return;
        
            default:
                console.log("Seleccione una opción válida.");
                
                break;
        }
    }
};

const ejecucionCompleta = async () => {
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
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    console.log("Ejemplo de código bloqueante");

    consultaUsuarioBloqueante(id, roles);

    console.log("Ejemplo de código con promesas");

    consultaUsuarioPromesa(id, roles);

    console.log("Ejemplo de código con Async/Await");

    consultaUsuarioAsyncAwait(id, roles);
    
}

export { ejecucionCompleta };