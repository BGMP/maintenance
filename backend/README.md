backend
===

Todo el backend del proyecto, especificación de la API REST y rutas de la app.

## Entorno de Desarrollo
### Dependencias
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Software Utilizado
- [Git](https://git-scm.com/)
- [Insomnia](https://insomnia.rest/)
- [WebStorm](https://www.jetbrains.com/webstorm/)

## Set Up
Clonar el repositorio
```
git clone https://github.com/BGMP/maintenance
```
Instalar las dependencias:
```
cd maintenance
yarn install
```
Antes de hacer funcionar el backend, se deberá crear un archivo .env para nuestras variables de entorno. Es posible
simplemente renombrar .env.secrets a .env y rellenar las variables que sean necesarias.
```
mv .env.secrets .env
```
Construir y correr el proyecto en modo desarrollo
```
yarn run dev
```
La app deberá estar funcionando por defecto en `http://localhost:3000`.

## Estructura del Proyecto
| Nombre | Descripción |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **controllers/**         | Los controladores que definen funciones para servir rutas de express. |
| **docs/**                | Todos los archivos relacionados a la documentación del proyecto. |
| **models/**              | Modelos que definen esquemas que serán usados en el almacenamiento e interacción con la base de datos. |
| **routes/**              | Contiene todas las rutas de express separadas por modelo. |
| index.js                 | Punto de entrada a la app de express. |
| package.json             | Contiene las dependencias de npm y los build scripts. |

### Scripts
Scripts definidos en package.json.

| Script | Descripción |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `yarn start`                   | Encender normalmente la app. |
| `yarn run dev`                 | Encender la app en modo desarrollador |

### API
El backend del proyecto tiene un diseño hecho en Insomnia, el cual es importable desde cualquier dispositivo que tenga
el programa descargado. El archivo a importar se encuentra en `docs/db/Insomnia_2022-11-14.json`. Aquí hay un listado
de las URLs junto con sus respectivos request asociados:

![DESIGN](https://user-images.githubusercontent.com/26081543/201596688-171f1dfe-fe23-46ef-8ff3-f5a635f103e7.PNG)

## Desarrolladores
- [José Benavente](https://github.com/BGMP)
- [Diego Gutierrez](https://github.com/diegog97)
- [Benjamín Mosso](https://github.com/bamm99)
- [Felipe Rodriguez](https://github.com/pipe-r-v)
