# Sistema de Registro de Alumnos (CLI) 

Este proyecto es un programa de línea de comandos (CLI) que permite gestionar el ingreso de datos de personas (Nombre, Edad y Nota), procesarlos en una estructura de matriz y generar reportes estadísticos y de ordenamiento.

Se incluyen dos versiones funcionales: una desarrollada en **Python** y otra en **JavaScript (Node.js)** utilizando **ES Modules**.

---

## Funcionalidades

1.  **Entrada de datos dinámica:** El usuario puede cargar múltiples registros hasta que decida finalizar el proceso.
2.  **Estructura de Matriz:** Los datos se almacenan internamente siguiendo el formato `[nombre, edad, nota]`.
3.  **Reporte de Carga:** Muestra el listado completo de datos tal como fueron ingresados.
4.  **Ranking por Nota:** Muestra un segundo listado ordenado de mayor a menor según la calificación.
5.  **Cálculo de Promedio:** Calcula y muestra el promedio general de las notas cargadas.

---

## Requisitos e Instalación

### Versión Python
- **Requisito:** Tener instalado Python 3.x.
- **Ejecución:**
  ```bash
  python programa.py
Versión JavaScript (Node.js)
Requisito: Tener instalado Node.js (Versión 16 o superior).

Configuración: El proyecto utiliza "type": "module". Asegúrese de tener el archivo package.json en la carpeta o usar la extensión .mjs.

Ejecución:

Bash
node programa.js
 Instrucciones de Uso
Al iniciar el programa, se le solicitará el Nombre.

Ingrese la Edad (número entero) y la Nota (número decimal o entero).

Para finalizar la carga y ver los resultados, escriba la palabra "finalizar" cuando el sistema le pida el nombre.

El sistema imprimirá automáticamente los listados y el promedio final.

Detalles Técnicos (Algoritmo)
El procesamiento de datos se basa en los siguientes conceptos:

Matriz: Se utiliza una lista de listas (Python) / array de arrays (JS) para mantener la integridad de cada fila de datos.

Ordenamiento: Se implementaron funciones de comparación personalizadas para ordenar el índice correspondiente a la nota (index 2).

Validación: El sistema está diseñado para ser intuitivo, indicando claramente los pasos al usuario en la terminal.

Generado por: Perez Anahi Jacqueline