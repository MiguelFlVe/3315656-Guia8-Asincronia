/**
 * Ejercicio 1: Explorando la asincronía básica
 * Imprime "Inicio", ejecuta una operación asíncrona con setTimeout de 2 segundos,
 * y finalmente imprime "Fin" para demostrar el orden real de ejecución.
 *
 * Nota: Es obligatorio usar console.log aquí porque la meta del ejercicio es demostrar
 * el orden real de ejecución en asincronía. Si se usa return o promesas, el output
 * se mostraría de forma síncrona y no reflejaría cómo funciona la asincronía en la práctica.
 */
export const Ej1 = () => {
    console.log("Inicio");
    setTimeout(() => {
        console.log("Operación asíncrona completada");
    }, 2000);
    console.log("Fin");
};