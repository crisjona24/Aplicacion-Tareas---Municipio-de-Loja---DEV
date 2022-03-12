# apptareas
Aplicación para la gestión de tareas para el Municipio de Loja

Se requieren instalar los modulos 
npm install morgan express ejs express-flash-notification debug cookie-parser express-session

npm install nodemon -D


Para levantar el servidor ejecutar: npm run start


Las ventanas de usuario se cargan mediante: http://localhost:3000/users/<direccion>

Para incluir el header y el footer(no completo):
<% include partials/_header %>
<% include partials/_footer %>

EN CASO DE USAR UNA CARPETA SRC QUE ALBERGE LAS CARPTES, EN EL ARCHIVO PACKAGE.JSON USAR:
    /*PARA lA CARPETA SRC: 
    "scripts": {
    "start": "nodemon src/bin/www"
    },
La carpeta src no llevara la carpeta nodemodules, archivos package json. 
