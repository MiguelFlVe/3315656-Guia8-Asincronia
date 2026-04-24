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

const consultaUsuarioBloqueante = () => {
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

import promptSync from 'prompt-sync';
const prompt = promptSync();

const consultaUsuarioPromesa = () => {
    let continuar = true;
    
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

    while (continuar) {
        console.log("Seleccione el usuario a registrar: \n1. 101 \n2. 102 \n3. 103 \n4. 104 \n5. No registrar");

        const usreg = Number(prompt());

        const select = id[usreg - 1];

        switch (usreg) {
            case 1:
                let usuario1 = {id: select};

                console.log(`Consultando usuario ${select}`);

                espera(1200).then(() => {
                    usuario1 = { ...usuario1, nombre: `Usuario ${select}` };

                    espera(800).then(() => {
                        usuario1 = { ...usuario1, seguridad: Math.random() > 0.5 ? "OK" : "FALLA"};

                        espera(2000).then(() => {
                            usuario1 = { ...usuario1, rol: roles[Math.floor(Math.random() * roles.length)]};

                            espera(600).then(() => console.log(usuario1));

                        });
                    });
                });

                break;

            case 2:
                let usuario2 = {id: select};

                console.log(`Consultando usuario ${select}`);

                espera(1200).then(() => {
                    usuario2 = { ...usuario2, nombre: `Usuario ${select}` };

                    espera(800).then(() => {
                        usuario2 = { ...usuario2, seguridad: Math.random() > 0.5 ? "OK" : "FALLA"};

                        espera(2000).then(() => {
                            usuario2 = { ...usuario2, rol: roles[Math.floor(Math.random() * roles.length)]};

                            espera(600).then(() => console.log(usuario2));
                            
                        });
                    });
                });

                break;

            case 3:
                let usuario3 = {id: select};

                console.log(`Consultando usuario ${select}`);

                espera(1200).then(() => {
                    usuario3 = { ...usuario3, nombre: `Usuario ${select}` };

                    espera(800).then(() => {
                        usuario3 = { ...usuario3, seguridad: Math.random() > 0.5 ? "OK" : "FALLA"};

                        espera(2000).then(() => {
                            usuario3 = { ...usuario3, rol: roles[Math.floor(Math.random() * roles.length)]};

                            espera(600).then(() => console.log(usuario3));
                            
                        });
                    });
                });

                break;

            case 4:
                let usuario4 = {id: select};

                console.log(`Consultando usuario ${select}`);

                espera(1200).then(() => {
                    usuario4 = { ...usuario4, nombre: `Usuario ${select}` };

                    espera(800).then(() => {
                        usuario4 = { ...usuario4, seguridad: Math.random() > 0.5 ? "OK" : "FALLA"};

                        espera(2000).then(() => {
                            usuario4 = { ...usuario4, rol: roles[Math.floor(Math.random() * roles.length)]};

                            espera(600).then(() => console.log(usuario4));
                            
                        });
                    });
                });

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



export {
    consultaUsuarioBloqueante,
    consultaUsuarioPromesa
};