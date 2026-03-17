# Lista principal (matriz)
personas = []

while True:
    print("\n--- Nuevo registro ---")
    nombre = input("Ingresa el nombre (o 'finalizar' para terminar): ")
    
    if nombre.lower() == 'finalizar': 
        break
    
    #pide edad y nota
    edad = int(input("Ingresa la edad: "))
    nota = float(input("Ingresa la nota: "))

    # guardamos los datos de ESTA persona
    registro = [nombre, edad, nota]

    # lo metemos en la lista principal
    personas.append(registro) 
    print("Registro agregado correctamente.")

# --- una vez que salimos del bucle (escribiendo finalizar) ---

if len(personas) > 0:
    # Mostrar lista original
    print("\n=== LISTADO COMPLETO (ORDEN DE CARGA) ===")
    for p in personas:
        print(f"Nombre: {p[0]} | Edad: {p[1]} | Nota: {p[2]}")

    # Ordenar de mayor a menor por nota (índice 2)
    lista_ordenada = sorted(personas, key=lambda x: x[2], reverse=True)

    print("\n=== LISTADO ORDENADO POR NOTA (MAYOR A MENOR) ===")
    for p in lista_ordenada:
        print(f"Nota: {p[2]} - Estudiante: {p[0]}")

    # Promedio
    total_notas = sum(p[2] for p in personas)
    promedio = total_notas / len(personas)
    print(f"\n>>> PROMEDIO GENERAL: {promedio:.2f}")
else:
    print("No se cargaron datos.")