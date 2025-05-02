--Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) 
SELECT
    nombres
FROM
    empleados
ORDER BY
    nombres DESC;

--Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
SELECT
    e.nombres,
    p.puesto,
    l.localidad
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
    JOIN departamentos d ON e.departamento_id = d.id
    JOIN localidades l ON d.localidad_id = l.id
WHERE
    p.puesto = 'Soporte';

--Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
SELECT
    nombres
FROM
    empleados
WHERE
    nombres like '%o';

--Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
SELECT
    e.nombres,
    p.puesto,
    e.sueldo
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
    JOIN departamentos d ON e.departamento_id = d.id
    JOIN localidades l ON d.localidad_id = l.id
WHERE
    l.localidad = 'Carlos Paz';

--Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.
SELECT
    e.nombres,
    p.puesto,
    l.localidad
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
    JOIN departamentos d ON e.departamento_id = d.id
    JOIN localidades l ON d.localidad_id = l.id
WHERE
    e.sueldo BETWEEN 10000 AND 13000;

--Visualizar los departamentos con más de 5 empleados
SELECT
    d.denominacion,
    COUNT(e.id) AS cantidad_empleados
FROM
    empleados e
    JOIN departamentos d ON e.departamento_id = d.id
GROUP BY
    d.denominacion
HAVING
    COUNT(e.id) > 5;

--Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.
SELECT
    e.nombres
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
    JOIN departamentos d ON e.departamento_id = d.id
    JOIN localidades l ON d.localidad_id = l.id
WHERE
    l.localidad = 'Córdoba'
    AND p.puesto IN ('Analista', 'Programador');

--Calcula el sueldo medio de todos los empleados.
SELECT
    AVG(sueldo) AS "Sueldo medio entre todos los empleados"
FROM
    empleados;

--¿Cuál es el máximo sueldo de los empleados del departamento 10?
SELECT
    MAX(e.sueldo) AS "Máximo sueldo de los empleados del departamento 10"
FROM
    empleados e
WHERE
    e.departamento_id = 10;

--Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
SELECT
    MIN(e.sueldo) AS "Sueldo mínimo de los empleados del puesto Soporte"
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
WHERE
    p.puesto = 'Soporte';

--Para cada puesto obtener la suma de sueldos.
SELECT
    p.puesto,
    SUM(e.sueldo) AS total_sueldo
FROM
    empleados e
    JOIN puestos p ON e.puesto_id = p.id
GROUP BY
    p.puesto;