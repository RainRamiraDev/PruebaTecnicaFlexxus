export class DiferenciaArray {
    static imprimirDiferencia(x: string[], y: string[]): void {
      console.log(y.filter(element => !x.includes(element)));
    }
  }