import * as readlineSync from 'readline-sync';

export class SueldosOperarios {
  private sueldos: number[] = [];

  constructor() {
    console.log("Ingrese los sueldos de 5 operarios:");
    for (let i = 0; i < 5; i++) {
      let sueldo: number;
   
      while (true) { 
        try {
          sueldo = readlineSync.questionFloat(`Sueldo del operario ${i + 1}: `);
          if (isNaN(sueldo) || sueldo <= 0) {
            throw new Error("El sueldo debe ser un número positivo.");
          }
          this.sueldos.push(sueldo);
          break;
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.log(error.message);
          } else {
            console.log("Ha ocurrido un error inesperado.");
          }
        }
      }
    }
  }

  imprimirSueldos(): void {
    if (this.sueldos.length === 0) {
      console.log("No se han cargado sueldos.");
      return;
    }

    console.log("\nSueldos de los operarios:");
    this.sueldos.forEach((sueldo, index) => {
      console.log(`Operario ${index + 1}: $${sueldo}`);
    });
  }
}
