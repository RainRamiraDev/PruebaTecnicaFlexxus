## Prueba Técnica de Programación

Este repositorio contiene la solución a una prueba técnica compuesta por desafíos de **JavaScript / TypeScript**, **SQL** y **desarrollo de API**. Cada sección está organizada por carpetas para facilitar su revisión.

---

## Índice

- [Prueba Técnica de Programación](#prueba-técnica-de-programación)
- [Índice](#índice)
- [1. Números Impares (JavaScript)](#1-números-impares-javascript)
  - [📂 Ubicación: `./1-numeros-impares`](#-ubicación-1-numeros-impares)
- [2. Sueldos de Operarios (TypeScript)](#2-sueldos-de-operarios-typescript)
  - [📂 Ubicación: `./2-sueldos-operarios`](#-ubicación-2-sueldos-operarios)
- [3. Clase Alumno (TypeScript)](#3-clase-alumno-typescript)
  - [📂 Ubicación: `./3-alumno`](#-ubicación-3-alumno)
- [4. Comparación de Arrays (JavaScript ES6)](#4-comparación-de-arrays-javascript-es6)
- [5. Consultas SQL](#5-consultas-sql)
  - [📂 Ubicación: `./5-sql-consultas`](#-ubicación-5-sql-consultas)
- [6. API RESTful - Artículos](#6-api-restful---artículos)
  - [📂 Ubicación: `./6-api-articulos`](#-ubicación-6-api-articulos)
  - [📌 Requisitos Técnicos](#-requisitos-técnicos)
- [🛡️ .gitignore](#️-gitignore)

---

## 1. Números Impares (JavaScript)

Algoritmo que muestra por consola todos los números impares entre 0 y 100.

### 📂 Ubicación: `./1-numeros-impares`

▶️ Cómo ejecutar:

```bash
cd 1-numeros-impares
```
```bash
npm install
```
```bash
npm start
```
## 2. Sueldos de Operarios (TypeScript)
Programa con una clase que recibe los sueldos de 5 operarios y los imprime.

### 📂 Ubicación: `./2-sueldos-operarios`
▶️ Cómo ejecutar:

```bash
cd 2-sueldos-operarios
```
```bash
npm install
```
```bash
npm start
```
## 3. Clase Alumno (TypeScript)
Clase Alumno con nombre y edad. Muestra si es mayor de edad (>= 18).

### 📂 Ubicación: `./3-alumno`
▶️ Cómo ejecutar:

```bash
cd 3-
```
```bash
npm install
```
```bash
npm start
```
## 4. Comparación de Arrays (JavaScript ES6)
Código de una sola línea que imprime los elementos de y que no están en x.

```js
const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];
console.log(y.filter(e => !x.includes(e)));
```
📂 Ubicación: `./4-comparacion-arrays`
## 5. Consultas SQL
Consultas a una base de datos relacional que resuelven distintos requerimientos utilizando SQL.

### 📂 Ubicación: `./5-sql-consultas`
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

### 📂 Ubicación: `./6-api-articulos`
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
cd 6-api-articulos
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
├── 1-numeros-impares
├── 2-sueldos-operarios
├── 3-alumno
├── 4-comparacion-arrays
├── 5-sql-consultas
└── 6-api-articulos
```
## 🛡️ .gitignore
Todas las carpetas contienen sus propios node_modules, los cuales están correctamente ignorados mediante el archivo .gitignore:

```bash
node_modules/
dist/
.env
```**