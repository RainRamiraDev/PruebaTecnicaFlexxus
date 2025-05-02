## Prueba Técnica de Programación

Este repositorio contiene la solución a una prueba técnica compuesta por desafíos de **JavaScript / TypeScript**, **SQL** y **desarrollo de API**. Cada sección está organizada por carpetas para facilitar su revisión.

---

## Índice
- [1. Números Impares (JavaScript)](#1-números-impares-javascript)
- [2. Sueldos de Operarios (TypeScript)](#2-sueldos-de-operarios-typescript)
- [3. Clase Alumno (TypeScript)](#3-clase-alumno-typescript)
- [4. Comparación de Arrays (JavaScript ES6)](#4-comparación-de-arrays-javascript-es6)
- [5. Consultas SQL](#5-consultas-sql)
- [6. API RESTful - Artículos](#6-api-restful---artículos)
---

## 1. Números Impares (JavaScript)

Algoritmo que muestra por consola todos los números impares entre 0 y 100.

### 📂 Ubicación: `./01-numeros-impares`

▶️ Cómo ejecutar:

```bash
cd 01-numeros-impares
```
```bash
npm install
```
```bash
npm start
```
## 2. Sueldos de Operarios (TypeScript)
Programa con una clase que recibe los sueldos de 5 operarios y los imprime.

### 📂 Ubicación: `./02-sueldos-operarios-vector`
▶️ Cómo ejecutar:

```bash
cd 02-sueldos-operarios-vector
```
```bash
npm install
```
```bash
npm start
```
## 3. Clase Alumno (TypeScript)
Clase Alumno con nombre y edad. Muestra si es mayor de edad (>= 18).

### 📂 Ubicación: `./03-clase-alumno-edad`
▶️ Cómo ejecutar:

```bash
cd 03-clase-alumno-edad
```
```bash
npm install
```
```bash
npm start
```
## 4. Comparación de Arrays (JavaScript ES6)
Código de una sola línea que imprime los elementos de y que no están en x.
### 📂 Ubicación: `./04-diferencia-arrays`

```js
const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];
console.log(y.filter(e => !x.includes(e)));
```

## 5. Consultas SQL
Consultas a una base de datos relacional que resuelven distintos requerimientos utilizando SQL.

### 📂 Ubicación: `./05-consultas-sql-empleados`
📝 Consultas incluidas:
- Empleados ordenados alfabéticamente (Z...A)
- Datos de empleados con puesto 'Soporte'
- Empleados cuyo nombre termina en 'o'
- Empleados que trabajan en Carlos Paz
- Empleados con sueldo entre 10000 y 13000
- Departamentos con más de 5 empleados
- Empleados en Córdoba con puesto ‘Analista’ o ‘Programador’
- Sueldo medio de los empleados
- Sueldo máximo del departamento 10
- Sueldo mínimo del departamento ‘Soporte’
- Suma de sueldos por puesto

## 6. API RESTful - Artículos
🛠 Descripción
Se desarrolló una API con operaciones CRUD para gestionar artículos. Se implementaron filtros, validaciones, seguridad en rutas, y documentación.

### 📂 Ubicación: `./06-api-articulos`
🧩 Funcionalidades
- GET: Buscar artículos por nombre (parcial o exacto) y estado.

- POST: Crear artículos (nombre y marca requeridos).

- PUT: Actualizar cualquier campo excepto el ID.

- DELETE: Desactivar artículos (soft delete).

### 📌 Requisitos Técnicos
- Validación de datos (entrada/salida)

- Seguridad en rutas

- Arquitectura limpia y mantenible

- Conexión a base de datos (relacional o no relacional)

- Documentación de endpoints

▶️ Cómo ejecutar:

```bash
cd 06-api-articulos
```
```bash
npm install
```
```bash
npm run dev
```

📁 Estructura del Repositorio
```sql
.
├── 01-numeros-impares
├── 02-sueldos-operarios-vector
├── 03-clase-alumno-edad
├── 04-diferencia-arrays
├── 05-consultas-sql-empleados
└── 06-api-articulos
```
