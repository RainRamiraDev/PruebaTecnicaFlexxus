import { Alumno } from './alumno';

try {
    const alumno = new Alumno();
    alumno.imprimirDatos();
    alumno.esMayorDeEdad();
} catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Se produjo un error desconocido.");
    }
}