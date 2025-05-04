// appError.ts (sin cambios, pero por si necesitas referenciarlo)
export class appError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Mantiene el stack trace correcto en entornos de desarrollo
    Error.captureStackTrace(this, this.constructor);
  }
}
