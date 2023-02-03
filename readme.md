1.- iniciar proyecto con npm init -y

2.- instalar dependencias express sequelize
pg pg-hstore cors dotenv
3.-instalar dependencias de desarrollo nodemon morgan
4.- Estructura de carpetas

/src--/

---/services
---/models
---/ controllers
---/routes
----/middlewates
----/seeders
----/ test
---/utils
----/templates
app.js
server.js

5.-scripts start, dev en package.json

6.- crear un server basico
7.- configurar la conexion a la base de datos db
8.- autenticar la base de datos app.js
9.- crear un modelo generico de usuarios
10.- crear el init models
11.- sincronizar la base de datos
12.- registrar usuario => creacion de usuarios
bcrypt -- un paquete de node
13.- autenticacion con el login
