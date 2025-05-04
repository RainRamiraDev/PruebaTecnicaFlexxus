-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS articulos_api;
USE articulos_api;

-- Crear la tabla de artículos
CREATE TABLE articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    fecha_modificacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

INSERT INTO articulos (nombre, marca, fecha_modificacion, activo) 
VALUES 
('Camiseta Deportiva', 'Nike', '2025-03-01 10:15:00', TRUE),
('Zapatillas Running', 'Adidas', '2025-04-10 14:30:00', TRUE),
('Pantalón de Jean', 'Levi\'s', '2024-12-25 09:00:00', FALSE),
('Chaqueta de Invierno', 'Columbia', '2024-11-15 18:45:00', TRUE),
('Gorra de Béisbol', 'New Era', '2025-02-20 11:00:00', TRUE);

INSERT INTO articulos (nombre, marca, fecha_modificacion, activo) 
VALUES 
('Sudadera con Capucha', 'Puma', '2024-10-05 12:00:00', TRUE),
('Bermuda de Playa', 'Billabong', '2024-08-15 16:30:00', TRUE),
('Botines de Fútbol', 'Under Armour', '2024-07-30 08:00:00', TRUE),
('Cinturón de Cuero', 'Wrangler', '2025-01-12 13:45:00', FALSE),
('Mochila Deportiva', 'Reebok', '2024-11-07 17:20:00', TRUE),
('Gafas de Sol', 'Ray-Ban', '2024-09-21 10:10:00', TRUE),
('Pantalones Cortos', 'Quiksilver', '2025-02-10 14:50:00', TRUE),
('Zapatos de Dress', 'Clarks', '2024-12-01 11:40:00', TRUE),
('Chaqueta de Cuero', 'Schott', '2024-10-22 19:30:00', FALSE),
('Guantes de Invierno', 'The North Face', '2024-12-15 20:00:00', TRUE);
