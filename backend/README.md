## Instrucciones de implementación

## Paso 1
Clone el repositorio, su terminal escriba lo siguiente

####  `git clone https://github.com/felix25/crud-mern.git`

#### `npm install`

## Paso 2
Abra su gestro de base de datos ya sea 

- __mysql__  
- __Postgresql__

Cree una base de datos con el nombre de su afinidad ejemplo: bd_crud

cambie las credenciales de la BD en el archivo <b>config.json</b> 

<b>IMPORTANTE</b>: si usa mysql en <b>dialect</b> cambie postgres por mysql.

## Paso 3
En su terminal ejecute 
#### `npm run migrate:all`
esta sintaxis ejecuta las migraciones de la BD

#### `npm run dev`

levantamos nuestro servidor
