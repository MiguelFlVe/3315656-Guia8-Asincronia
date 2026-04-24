// Importar ejercicios desde la carpeta de Apropiación
import {
    AsincroniaBasica,
    codigoBloqueante, 
    procesarPedido,
    saludoAsync,
    consultaUsuarioBloqueante,
    consultaUsuarioPromesa,
    consultaUsuarioAsyncAwait
} from './Apropiación/Index.js';

// Importar ejercicios desde la carpeta de Transferencia
import {

} from './Transferencia/Index.js';

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

    EjA7: {
        title: 'Ejercicio 7 de Apropiación',
        desc: 'Uso de Async/Await: \nCrear una función async que espere una promesa de 2 segundos y luego muestre el resultado.',
    },

    EjInt3: {
        title: 'Ejercicio Integrador 3',
        desc: 'Simulador de consulta de Usuarios y roles',
    }
  },
  Transferencia: {
    EjT5: {
        title: 'Ejercicio 5',
        desc: 'Descripción del ejercicio 5'
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
                const {EjA1, EjA2, EjA3, EjA7, EjInt3} = Apropiacion;

                // Selección del ejercicio
                console.log('\nHas Selecionado Apropiación \nSeleccione un ejercicio: \n1. Ejercicio 1 \n2. Ejercicio 2 \n3. Ejercicio 3 \n7. Ejercicio 7 \n10. Ejercicio Integrador 3 \n11. Salir');
                
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
                        

                    case '7':
                        // Ejercicio 7 de Apropiación
                        console.log(`\n${EjA7.title} \n \n${EjA7.desc} \n \nEjecutando ejercicio... \n`);
                        saludoAsync();
                        return;

                    case '10':
                        // Ejercicio Integrador 3
                        console.log(`\n${EjInt3.title} \n${EjInt3.desc}`);

                        // Elección del código a ejecutar

                        console.log("Seleccione el código que desea revisar (debido a la estructura de este menú, deberá volver a ejecutar la función y regresar a esta sección. Se solicita comprensión): \n1. Código bloqueante \n2. Estructura de promesas \n3. Estructura Async/Await \n4. Salir");

                        const selectEI3 = prompt('Selecciones el código a simular: ');
                        
                        switch (selectEI3) {
                            case '1':
                                console.log("Ejecutando la simulación del código bloqueante");
                                
                                consultaUsuarioBloqueante();
                                
                                return;

                            case '2':
                                console.log("Ejecutando la simulación del código con promesas");

                                consultaUsuarioPromesa();

                                return;

                            case '3':
                                console.log("Ejecutando la simulación del código con Async/await");
                                
                                consultaUsuarioAsyncAwait();

                                return;

                            case '4':
                                console.log("Regresando al menú anterior.");

                                break;                                
                        
                            default:
                                console.log("Seleccione una opción válida.");
                                
                                break;
                        }

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
                const {EjT5} = Transferencia;

                // Selección del ejercicio
                console.log('\nHas Selecionado Transferencia \nSeleccione un ejercicio: \n5. Ejercicio 5 \n6. Salir');
                
                const Tra_exercise = prompt('Ingrese el número del ejercicio: ');

                switch (Tra_exercise) {
                    case '5':
                        // Ejercicio 5 de Transferencia
                        console.log(`\n${EjT5.title}\n${EjT5.desc}`);
                        
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