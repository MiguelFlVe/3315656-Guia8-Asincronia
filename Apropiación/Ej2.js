// 2. Identificando código bloqueante
// Ejercicio:
// Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
// ejecución del programa.
// Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.


export function codigoBloqueante() {
    console.log("Inicio del ejercicio");

    // tarea bloqueante
    for (let i = 0; i < 1e9; i++) {
        // simulación de proceso pesado
    }

    console.log("Fin del ciclo bloqueante");

    // tarea no bloqueante
    setTimeout(() => {
        console.log("Tarea asincrónica ejecutada");
    }, 0);

    console.log("Fin del ejercicio");
}