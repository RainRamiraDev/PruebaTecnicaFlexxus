import * as readlineSync from 'readline-sync';

export class Alumno {
    nombre: string;
    edad: number;

    constructor() {
        this.nombre = readlineSync.question("Ingrese el nombre del alumno: ");
        if (!this.nombre.trim()) {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.edad = readlineSync.questionInt("Ingrese la edad del alumno: ");
        if (this.edad <= 0) {
            throw new Error("La edad no puede ser negativa.");
        }
    }

    imprimirDatos(): void {
        console.log(`\nNombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} no es mayor de edad.`);
        }
    }
}


