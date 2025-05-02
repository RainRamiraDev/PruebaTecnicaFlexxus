import { SueldosOperarios } from './sueldosOperarios';

try {
  const operarios = new SueldosOperarios();
  operarios.imprimirSueldos();
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  } else {
    console.error("Se produjo un error desconocido.");
  }
}