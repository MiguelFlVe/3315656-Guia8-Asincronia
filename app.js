// Importar ejercicios desde la carpeta de Apropiación
import {

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
    EjA7: {
        title: 'Ejercicio 7',
        desc: 'Descripción del ejercicio 7',
    },

    EjInt3: {
        title: 'Ejercicio Integrador 3',
        desc: 'Descripción del ejercicio 3',
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
                const {EjA7, EjInt3} = Apropiacion;

                // Selección del ejercicio
                console.log('\nHas Selecionado Apropiación \nSeleccione un ejercicio: \n7. Ejercicio 7 \n10. Ejercicio Integrador 3 \n11. Salir');
                
                const Apr_exercise = prompt('Ingrese el número del ejercicio: ');

                switch (Apr_exercise) {
                    case '7':
                        // Ejercicio 7 de Apropiación
                        console.log(`\n${EjA7.title} \n${EjA7.desc}`);

                        break;

                    case '10':
                        // Ejercicio Integrador 3
                        console.log(`\n${EjInt3.title} \n${EjInt3.desc}`);

                        break;

                    case '3':
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
                        
                        break;
                        
                    case '3':
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