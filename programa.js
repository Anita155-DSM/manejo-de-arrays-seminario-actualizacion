import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function iniciarPrograma() {
    // Configuramos la "entrada" y "salida" de la terminal
    const rl = createInterface({ input, output });
    const personas = [];

    console.log("--- Registro de Alumnos (Escribe 'finalizar' para terminar) ---");

    while (true) {
        const nombre = await rl.question("Nombre: ");
        
        if (nombre.toLowerCase() === 'finalizar') break;

        const edad = parseInt(await rl.question("Edad: "));
        const nota = parseFloat(await rl.question("Nota: "));

        // Guardamos la sublista [nombre, edad, nota] en nuestra matriz
        personas.push([nombre, edad, nota]);
        console.log("Guardado.\n");
    }

    rl.close(); // Cerramos la terminal al terminar

    if (personas.length > 0) {
        // 1. Mostrar lista original
        console.log("\n=== LISTADO COMPLETO ===");
        personas.forEach(p => {
            console.log(`Nombre: ${p[0]} | Edad: ${p[1]} | Nota: ${p[2]}`);
        });

        // 2. Ordenar por nota (índice 2) de mayor a menor
        // Usamos [...personas] para crear una copia y no arruinar la original
        const listaOrdenada = [...personas].sort((a, b) => b[2] - a[2]);

        console.log("\n=== ORDENADO POR NOTA (Mayor a Menor) ===");
        listaOrdenada.forEach(p => {
            console.log(`Nota: ${p[2]} - Estudiante: ${p[0]}`);
        });

        // 3. Promedio
        const suma = personas.reduce((acumulador, p) => acumulador + p[2], 0);
        const promedio = suma / personas.length;
        console.log(`\n>>> PROMEDIO GENERAL: ${promedio.toFixed(2)}`);
    } else {
        console.log("No hay datos.");
    }
}

iniciarPrograma();