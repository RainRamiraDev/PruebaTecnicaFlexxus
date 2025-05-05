# Proyecto de Gestión de Artículos y Usuarios

## Descripción
Este proyecto es una API RESTful construida con Express.js y TypeScript, diseñada para gestionar artículos y usuarios. La API permite crear, actualizar, desactivar y filtrar artículos, así como registrar y autenticar usuarios mediante tokens JWT. La base de datos está gestionada mediante TypeORM y MySQL.

## Tecnologías utilizadas:
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para crear APIs RESTful.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **TypeORM**: ORM para interactuar con bases de datos MySQL.
- **MySQL**: Sistema de gestión de bases de datos.
- **JWT**: JSON Web Tokens para autenticación.
- **Bcrypt.js**: Librería para el hash de contraseñas.
- **dotenv**: Carga variables de entorno desde un archivo .env.
- **Cors**: Middleware para permitir solicitudes desde diferentes orígenes.
- **Morgan**: Middleware para logging HTTP.

## Estructura del Proyecto
````sql
.
├── src
│ ├── config
│ │ └── conexion.ts
│ │
│ ├── entities
│ │ ├── articuloModel.ts 
│ │ └── userModel.ts
│ │
│ ├── middleware
│ │ ├── error
│ │ │ ├── appError.ts 
│ │ │ └── errorHandler.ts 
| | | └── catchAsync.ts
│ │ ├── auth
│ │ │  └── protect.ts 
│ │ └── validation
│ │     ├── articuloValidator.ts
│ │     └── userValidator.ts
│ │     └── validationHandler.ts
│ │
│ ├── routes
│ │ ├── articulosRoutes.ts 
│ │ └── authRoutes.ts 
│ │
│ ├── scripts
│ │   └── script_db.sql
│ │
│ ├── services
│ │ ├── articulosService.ts 
│ │ └── authService.ts 
│ │
│ ├── types
│ │   └──user.d.ts
│ ├── app.ts 
│ └── types.d.ts 
└── .env 
````
## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```
3. Instala las dependencias:

    ```bash
    npm install
    ```
4. Configuración
Antes de ejecutar el proyecto, asegúrate de tener un archivo .env con las siguientes variables:
    ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=tu_usuario_mysql
    DB_PASSWORD=tu_contraseña_mysql
    DB_DATABASE=nombre_de_base_de_datos
    JWT_SECRET=secreto_para_jwt
    ```
    `Nota:` Asegúrate de reemplazar los valores de las variables de entorno con tus propios valores de configuración.

### Ejecución
Para iniciar la aplicación en modo de desarrollo, puedes usar el siguiente comando:

```bash
npm run dev
```
Esto iniciará el servidor en el puerto 3000 por defecto. Puedes cambiar el puerto utilizando la variable de entorno PORT en el archivo .env.

# Endpoints

### `POST /articulos`
Crea un nuevo artículo.

#### Body:

```json
{
  "nombre": "Nombre del artículo",
  "marca": "Marca del artículo"
}
```
#### Respuesta:

```json
{
    "nombre": "Nombre del artículo",
    "marca": "Marca del artículo",
    "id": 21,
    "activo": true,
    "fechaModificacion": "2025-05-04T22:00:40.000Z"
}
```

### `GET /articulos`
Filtra artículos basados en los parámetros enviados.

`Query Parameters (opcionales):`

- `nombre:` Filtra por nombre.

- `marca:` Filtra por marca.

- `activo:` Filtra por estado de activación (true o false).

- `exacto:` Filtra con coincidencias exactas (true o false).

Respuesta:

```json
[
   {
        "id": 11,
        "nombre": "Gafas de Sol",
        "marca": "Ray-Ban",
        "activo": true,
        "fechaModificacion": "2024-09-21T13:10:00.000Z"
    }
]
```
### `PATCH /articulos/:id`
Actualiza un artículo existente.
#### Body:

```json
{
  "nombre": "Nuevo nombre",
  "marca": "Nueva marca"
}
```
#### Respuesta:

```json
{
  "mensaje": "Artículo actualizado",
  "articulo": {
    "id": 1,
    "nombre": "Nuevo nombre",
    "marca": "Nueva marca",
    "activo": false
  }
}
```
### `PATCH /articulos/desactivar/:id`
Desactiva un artículo (lo marca como inactivo).

Respuesta:

```json
{
    "mensaje": "Artículo desactivado",
    "articulo": {
        "id": 3,
        "nombre": "Pantalón de Jean",
        "marca": "Levi's",
        "activo": false,
        "fechaModificacion": "2024-12-25T12:00:00.000Z"
    }
}
```
Rutas de Usuarios
### `POST /user/register`
Registra un nuevo usuario.

#### Body:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña_segura"
}
```
#### Respuesta:

```json
{
    "mensaje": "Usuario creado",
    "user": {
        "email": "usuario@ejemplo.com",
        "password": "password",
        "id": 1
    }
}
```
### `POST /user/login`
Inicia sesión y obtiene un token JWT.

#### Body:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "123456"
}
```
#### Respuesta:

```json
{
    "token": "token"
}
```

## Estructura de la Base de Datos

La base de datos utilizada es **MySQL**, y se compone de dos tablas principales: `articulos` y `users`. A continuación se detalla su estructura:

Para crear las tablas necesarias, ejecuta el archivo `src/scripts/script_db.sql` en tu instancia de MySQL después de crear la base de datos `articulos_api`.


### Base de Datos: `articulos_api`

```sql
CREATE DATABASE IF NOT EXISTS articulos_api;
USE articulos_api;
```
## Estructura de la Base de Datos `articulos_api`

### Tabla: `articulos`

| Campo              | Tipo de Dato     | Restricciones                                         |
|--------------------|------------------|-------------------------------------------------------|
| id                 | INT              | AUTO_INCREMENT, PRIMARY KEY                          |
| nombre             | VARCHAR(255)     | NOT NULL                                             |
| marca              | VARCHAR(100)     | NOT NULL                                             |
| fecha_modificacion | DATETIME         | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |
| activo             | BOOLEAN          | DEFAULT TRUE                                         |

---

### Tabla: `users`

| Campo   | Tipo de Dato  | Restricciones                   |
|---------|---------------|---------------------------------|
| id      | INT           | NOT NULL, AUTO_INCREMENT, PRIMARY KEY |
| email   | VARCHAR(100)  | NOT NULL, UNIQUE                |
| password| VARCHAR(255)  | NOT NULL                        |
