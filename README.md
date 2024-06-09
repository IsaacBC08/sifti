# Servidor SIFTI

Este servidor implementa una aplicación web básica utilizando el módulo `http.server` de Python junto con `socketserver` para manejar solicitudes HTTP y proporcionar funcionalidad para actualizar menús, anuncios y enviar reportes dentro de la plataforma SIFTI.

## Configuración del Servidor

El servidor está configurado para escuchar en el puerto **8081** y requiere autenticación básica para ciertas rutas mediante un nombre de usuario y contraseña:

- **Usuario**: `Team Sifti`
- **Contraseña**: `sifti4321`

## Archivos y Directorios

- **Directorio Estático**: Contiene archivos estáticos como HTML, CSS, JavaScript y otras assets necesarias para la interfaz de usuario.
- **Base de Datos JSON**: Utiliza archivos JSON para almacenar y gestionar datos cruciales como menús, anuncios y reportes.

## Funcionalidades

### Rutas Disponibles

- **GET `/host`**: Protegida por autenticación básica, esta ruta permite acceder a la funcionalidad principal del servidor.
  
- **POST `/update_menu`**: Permite actualizar el menú del sistema. Requiere una contraseña válida definida en la solicitud POST.

- **POST `/update_anuncio`**: Permite actualizar los anuncios del sistema. Requiere una contraseña válida definida en la solicitud POST.

- **POST `/send_report`**: Permite enviar reportes al sistema, manteniendo un historial limitado de los 10 reportes más recientes.

## Uso y Contribución

### Uso

Para utilizar este servidor en tu entorno local, sigue estos pasos:

1. Clona este repositorio:

`git clone https:/*github.com/tu-usuario/sifti-server.git`
`cd sifti-server`

2. Instala las dependencias necesarias (si las hay):

`pip install -r requirements.txt`

3. Configura el servidor ajustando las variables `PORT`, `PASSWORD`, y `USERNAME` según sea necesario en el archivo `server.py`.

4. Inicia el servidor:

`python server.py`


### Contribución

`Si deseas contribuir a este proyecto, por favor sigue estos pasos:`

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y confirma (`git commit -am 'Añade nueva funcionalidad'`).
4. Empuja la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Tecnologías Utilizadas

- **Python**: Para la implementación del servidor HTTP.
- **JSON**: Para el almacenamiento y manejo de datos.
- **Base64**: Para la decodificación de credenciales de autenticación.
- **JavaSxript**: Para las peticiones al servidor
- **HTML**: Para la estructura general de la página
- **CSS**: Para el diseño y color de la página
## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.