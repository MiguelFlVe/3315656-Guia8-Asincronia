// Importar ejercicios desde la carpeta de Apropiación
import {
    // Ejercicio 1
    AsincroniaBasica,
    
    // Ejercicio 2
    codigoBloqueante,
    
    // Ejercicio 3
    procesarPedido,

    // Ejercicio 6
    ejecutarProceso,

    // Ejercicio 7
    saludoAsync,

    // Ejercicio integrador 1
    consultaCallbacks, 
    consultaPromesas,
    consultaAsync,

    // Ejercicio integrador 2
    ejecutarEJInt2,
    
    // Ejercicio integrador 3
    ejecucionCompleta
} from './Index.js';

// Importar ejercicios desde la carpeta de Transferencia
import {
    // Ejercicio 1
    procesarCola,

    // Ejercicio 2
    procesarEntregas,

    //Ejercicio 3
    validarFormulario,

    // Ejercicio 5
    ejecutarServicios
} from './Index.js';

// Inicializar la función prompt-sync para leer entradas del usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Generación del objeto para el almacenamiento de ejercicios
const ejercicios = {
  Apropiacion: {
    EjA1: {
        title: 'Ejercicio 1',
        desc: 'Explorando la asincronía básica',
    },
    EjA2: {
        title: 'Ejercicio 2',
        desc: 'Comportamiento de codigo bloqueante\n',
    },

    EjA3: {
        title: 'Ejercicio 3',
        desc: 'Manejo de asincronía con Callbacks',
    },
    
    EjA6: {
        title: 'Ejercicio 6 de Apropiación',
        desc: 'Manejo de errores con Promesas',
    },

    EjA7: {
        title: 'Ejercicio 7 de Apropiación',
        desc: 'Uso de Async/Await: \nCrear una función async que espere una promesa de 2 segundos y luego muestre el resultado.',
    },
    
    EjInt1: {
        title: 'Ejercicio Integrador 1',
        desc: 'Callbacks, promesas, async/await',
    },

    EjInt2: {
        title: 'Ejercicio Integrador 2',
        desc: 'Simulador de procesamiento de órdenes con callbacks, promesas y async/await',
    },

    EjInt3: {
        title: 'Ejercicio Integrador 3',
        desc: 'Simulador de consulta de Usuarios y roles',
    }
  },
  Transferencia: {
    EjT1: {
        title: 'Ejercicio 1',
        desc: 'Gestión de una cola de atención'
    },

    EjT2: {
        title: 'Ejercicio 2',
        desc: 'Entrega de paquetes con tiempos variables'
    },

    EjT3: {
        title: 'Ejercicio 3',
        desc: 'Validación de un formulario con múltiples verificaciones externas'
    },
    
    EjT5: {
        title: 'Ejercicio 5',
        desc: 'Integración de servicios: disponibilidad, datos del usuario, historial y recomendaciones'
    }
  }
};

// Menú de interacción con el usuario
const menu = () => {
    // Presentación del grupo y la guía
    console.log('Guía 8: Asincronía \nFicha: 3315656 \nGrupo: 1 \nIntegrante 1: Miguel Flórez \nIntegrante 2: Oscar Solano \nIntegrante 3: Jesús Becerra');
    
    // Declaración de las variables para almacenar los ejercicios de cada categoría
    const {Apropiacion, Transferencia} = ejercicios;

    // Bucle para mostrar el menú de categorías y permitir al usuario seleccionar una opción
    while (true) {
        console.log('\nSeleccione una categoría: \n1. Apropiación \n2. Transferencia \n3. Salir');

        // Solicitar al usuario que ingrese el número de la categoría
        const section = prompt('Ingrese el número de la categoría: ');

        // Determinación de la sección a revisar
        switch (section) {
            case '1':
                // Apropiación

                // Declaración de las variables para almacenar los ejercicios de la categoría de Apropiación
                const {EjA1, EjA2, EjA3, EjA6, EjA7, EjInt1, EjInt2, EjInt3} = Apropiacion;

                // Selección del ejercicio
                console.log('\nHas Selecionado Apropiación \nSeleccione un ejercicio: \n1. Ejercicio 1 \n2. Ejercicio 2 \n3. Ejercicio 3 \n6. Ejercicio 6 \n7. Ejercicio 7 \n8. Ejercicio Integrador 1 \n9. Ejercicio Integrador 2 \n10. Ejercicio Integrador 3 \n11. Salir');
                
                const Apr_exercise = prompt('Ingrese el número del ejercicio: ');

                switch (Apr_exercise) {
                    case '1':
                        // Ejercicio 1 de Apropiación
                        console.log(`\n${EjA1.title} \n${EjA1.desc}`);
                        AsincroniaBasica();

                        return;

                    case '2':
                        // Ejercicio 2 de Apropiación
                        console.log(`\n${EjA2.title} \n${EjA2.desc}`);
                        console.log("Programa iniciado");
                        codigoBloqueante();
                        console.log("Programa finalizado");
                        
                        return;

                    case '3':
                        // Ejercicio 3 de Apropiación
                        console.log(`\n${EjA3.title} \n${EjA3.desc}`);
                        console.log("Iniciando pedido");
                        procesarPedido();
                        console.log("Pedido finalizado");
                        
                        return;

                    case '6':
                        // Ejercicio 6 de Apropiación
                        console.log(`\n${EjA6.title} \n${EjA6.desc}`);
                        
                        ejecutarProceso();

                        return;

                    case '7':
                        // Ejercicio 7 de Apropiación
                        console.log(`\n${EjA7.title} \n \n${EjA7.desc} \n \nEjecutando ejercicio... \n`);
                        saludoAsync();
                        
                        return;

                    case '8':
                        // Ejercicio Integrador 1
                        console.log(`\n${EjInt1.title} \n${EjInt1.desc}`);
                        console.log("\nEjecutando ejercicio integrador...\n");
                        
                        // Callbacks
                        consultaCallbacks();

                        // Promesas 
                        setTimeout(() => {
                        consultaPromesas();
                        }, 5000);

                        // Async/Await (después de las promesas)
                        setTimeout(() => {
                        consultaAsync();
                        }, 10000);
 
                        return;

                    case '9':
                        // Ejercicio Integrador 2
                        console.log(`\n${EjInt2.title} \n${EjInt2.desc}`);

                        ejecutarEJInt2();

                        return;

                    case '10':
                        // Ejercicio Integrador 3
                        console.log(`\n${EjInt3.title} \n${EjInt3.desc}`);

                        ejecucionCompleta();

                        return;

                    case '11':
                        // Salir
                        console.log('Regresando al menú principal...');
                        
                        break;

                    default:
                        // Opción no válida
                        console.log('Opción no válida. Por favor, ingrese un número válido.');
                        
                        break;
                }

                break;
            case '2':
                // Transferencia
                const {EjT1, EjT2, EjT3, EjT5} = Transferencia;

                // Selección del ejercicio
                console.log('\nHas Selecionado Transferencia \nSeleccione un ejercicio: \n1. Ejercicio 1 \n2. Ejercicio 2 \n3. Ejercicio 3 \n5. Ejercicio 5 \n6. Salir');
                
                const Tra_exercise = prompt('Ingrese el número del ejercicio: ');

                switch (Tra_exercise) {
                    case '1':
                        // Ejercicio 1 de Transferencia
                        console.log(`\n${EjT1.title}\n${EjT1.desc}`);
                        
                        const usuarios = [
                          { nombre: "Juan", tiempo: 2000 },
                          { nombre: "Maria", tiempo: 1500 },
                          { nombre: "Pedro", tiempo: 3000 }
                        ];

                        procesarCola(usuarios);
                        
                        return;
                        
                    case '2':
                        // Ejercicio 2 de Transferencia
                        console.log(`\n${EjT2.title}\n${EjT2.desc}`);
                        const paquetes = [
                            { id: 1, tiempo: 2000 },
                            { id: 2, tiempo: 1000 },
                            { id: 3, tiempo: 3000 },
                            { id: 4, tiempo: 1500 }
                        ];
                        
                        procesarEntregas(paquetes);

                        return;

                    case '3':
                        // Ejercicio 3 de Transferencia
                        console.log(`\n${EjT3.title}\n${EjT3.desc}`);
                        const usuario = {
                           correo: "mao@gmail.com",
                           documento: "1095949",
                           nombre: "Oscar Solano"
                               };

                        validarFormulario(usuario);

                        return;

                    case '5':
                        // Ejercicio 5 de Transferencia
                        console.log(`\n${EjT5.title}\n${EjT5.desc}`);

                        const tiempos = [(Math.random() * 9 + 1) * 1000, (Math.random() * 9 + 1) * 1000, (Math.random() * 9 + 1) * 1000, (Math.random() * 9 + 1) * 1000];

                        const fallos = [Math.random() < 0.25, Math.random() < 0.25, Math.random() < 0.25, Math.random() < 0.25];

                        ejecutarServicios('usuario123', tiempos, fallos);
                        
                        return;
                        
                    case '6':
                        // Salir
                        console.log('Regresando al menú principal...');
                        
                        break;

                    default:
                        // Opción no válida
                        console.log('Opción no válida. Por favor, ingrese un número válido.');
                        
                        break;
                }

                break;
            
            case '3':
                // Salir
                console.log('Saliendo...');
                
                return;

                break;
            default:
                // Opción no válida
                console.log('Opción no válida. Por favor, ingrese un número válido.');
                
                break;
        }
    }
}

// Ejecutar el menú
menu();