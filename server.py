import http.server as http_server
import socketserver
import os
import json
from base64 import b64decode
from datetime import datetime
import logging
from Lawliett_dir.Lawliett import Lawliett

os.system('pip install joblib')
# Configuración del puerto y credenciales de autenticación
PORT = 8081
PASSWORD = "sifti4321"
USERNAME = "Team Sifti"  # Nombre de usuario temporal

# Rutas a los directorios y archivos estáticos
BASE_DIR = os.path.dirname(__file__)
STATIC_DIR = os.path.join(BASE_DIR, 'web')
UPLOADS_DIR = os.path.join(BASE_DIR, 'uploads')  # Nuevo directorio para guardar imágenes
DATABASE_DIR = os.path.join(STATIC_DIR, 'database')
ANUNCIOS_JSON_FILE = os.path.join(DATABASE_DIR, 'common/anuncios.json')
MENU_JSON_FILE = os.path.join(DATABASE_DIR, 'common/menu.json')
REPORTES_JSON_FILE = os.path.join(DATABASE_DIR, 'common/reportes.json')
DESTACADA_JSON_FILE = os.path.join(DATABASE_DIR, 'common/noticias.json')

# Asegúrate de que el nuevo directorio de imágenes existe
os.makedirs(UPLOADS_DIR, exist_ok=True)

# Configuración del logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s', datefmt='%H:%M:%S')
# Definición de la clase Handler que manejará las solicitudes HTTP
class Handler(http_server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Llama al constructor de la clase padre (SimpleHTTPRequestHandler)
        # pasando los argumentos posicionales y de palabra clave.
        # Además, se añade el argumento de palabra clave 'directory'
        # para especificar el directorio de archivos estáticos.
        super().__init__(*args, directory=STATIC_DIR, **kwargs)
        
        
    def do_GET(self):
        # Eliminar cualquier parámetro de consulta de la URL
        self.path = self.path.split('?')[0]

        # Manejo de autenticación para la ruta '/host'
        if self.path == '/host':
            if not self.is_authenticated():
                # Enviar solicitud de autenticación si el usuario no está autenticado
                self.send_auth_request()
                return

        # Manejo de archivos en el directorio de cargas
        if self.path.startswith('/uploads'):
            # Construir la ruta del archivo dentro del directorio de cargas
            file_path = os.path.join(UPLOADS_DIR, self.path.lstrip('/uploads'))
            if os.path.exists(file_path):
                # Enviar respuesta HTTP 200 y el contenido del archivo
                self.send_response(200)
                self.send_header('Content-type', 'application/octet-stream')
                self.end_headers()
                with open(file_path, 'rb') as file:
                    self.wfile.write(file.read())
                return
            else:
                # Enviar error HTTP 404 si el archivo no existe
                self.send_error(404, 'File Not Found')
                return

        # Construir la ruta del archivo dentro del directorio estático
        file_path = os.path.join(STATIC_DIR, self.path.lstrip('/'))

        # Manejo de directorios
        if os.path.isdir(file_path):
            # Si es un directorio, cambiar la ruta a 'inicio.html' dentro del directorio
            self.path = os.path.join(self.path, 'inicio.html')
            return super().do_GET()
        elif os.path.exists(file_path + '.html'):
            # Si existe un archivo HTML con el mismo nombre que la ruta solicitada
            self.path += '.html'
            return super().do_GET()
        else:
            # Manejo predeterminado llamando al método do_GET de la clase padre
            return super().do_GET()

    def do_POST(self):
        # Obtener la dirección IP del cliente que realiza la solicitud POST
        client_ip = self.client_address[0]
        # Registrar en el log que se ha recibido una solicitud POST y desde qué IP
        logging.info(f"Solicitud POST recibida de {client_ip}")

        try:
            # Manejar las diferentes rutas de solicitud POST según self.path
            if self.path == '/update_menu':
                self.handle_menu_update()  # Llamar al método para manejar la actualización del menú
            elif self.path == '/update_anuncio':
                self.handle_anuncio_update()  # Llamar al método para manejar la actualización de anuncios
            elif self.path == '/send_report':
                self.handle_send_report()  # Llamar al método para manejar el envío de reportes
            elif self.path == '/update_destacadas':
                self.handle_destacada_update()  # Llamar al método para manejar la actualización de noticias destacadas
            elif self.path == '/upload_image':
                self.handle_image_upload()  # Llamar al método para manejar la subida de imágenes
            elif self.path == '/execute_command':
                self.handle_execute_command()
            else:
                # Enviar un error 404 si la ruta no coincide con ninguna de las anteriores
                self.send_error(404, 'Endpoint Not Found')
        except Exception as e:
            # Capturar cualquier excepción que pueda ocurrir durante el manejo de la solicitud POST
            logging.error(f"Error handling POST request: {e}")
            # Enviar un error 500 en caso de excepción para indicar un error interno del servidor
            self.send_error(500, 'Internal Server Error')

    def handle_execute_command(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        data = json.loads(post_data)
        command = data.get('command', '')

        try:
            response = Lawliett(command)
            response_data = {'status': 'success', 'response': response}
        except Exception as e:
            logging.error(f"Error executing command: {e}")
            response_data = {'status': 'error', 'message': str(e)}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response_data).encode('utf-8'))

    def is_authenticated(self):
        """
        Verifica si el usuario está autenticado mediante el encabezado de autorización Basic.

        Returns:
            bool: True si el usuario está autenticado correctamente, False en caso contrario.
        """
        auth_header = self.headers.get('Authorization')
        if auth_header is None:
            return False

        auth_type, encoded_credentials = auth_header.split(' ', 1)
        if auth_type.lower() != 'basic':
            return False

        decoded_credentials = b64decode(encoded_credentials).decode('utf-8')
        username, password = decoded_credentials.split(':', 1)
        return username == USERNAME and password == PASSWORD

    def send_auth_request(self):
        """
        Envía una respuesta de autenticación requerida (HTTP 401 Unauthorized) al cliente,
        indicando que se requiere autenticación básica para acceder al recurso protegido.

        La respuesta incluye los encabezados necesarios para solicitar credenciales básicas al cliente.

        """
        self.send_response(401)  # Enviar código de respuesta HTTP 401 Unauthorized
        self.send_header('WWW-Authenticate', 'Basic realm="Protected Area"')  # Solicitar autenticación básica
        self.send_header('Content-type', 'text/plain')  # Tipo de contenido de la respuesta (texto plano)
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(b'Usuario no autorizado.')  # Escribir mensaje de texto plano en el cuerpo de la respuesta

    def handle_send_report(self):
        """
        Maneja una solicitud POST para enviar un reporte al servidor.

        Lee los datos del reporte del cuerpo de la solicitud POST, los valida y los agrega al archivo JSON de reportes.
        Después de agregar el nuevo reporte, actualiza el archivo JSON en el sistema de archivos del servidor.

        Respuestas:
            - En caso de éxito, devuelve un mensaje JSON con estado 'success' y un mensaje informativo.
            - En caso de error al procesar los datos JSON, devuelve un mensaje JSON con estado 'error' y detalles del error.

        """
        content_length = int(self.headers['Content-Length'])  # Obtener la longitud del contenido del cuerpo de la solicitud
        post_data = self.rfile.read(content_length).decode('utf-8')  # Leer y decodificar el cuerpo de la solicitud

        try:
            data = json.loads(post_data)  # Convertir los datos del cuerpo de la solicitud a un objeto Python
            with open(REPORTES_JSON_FILE, 'r') as json_file:
                reportes = json.load(json_file)  # Cargar los reportes existentes desde el archivo JSON

            reportes = self.rotate_entries(reportes, 'report', 10, data['report'])  # Rotar y agregar nuevo reporte

            with open(REPORTES_JSON_FILE, 'w') as json_file:
                json.dump(reportes, json_file, indent=4)  # Guardar los reportes actualizados en el archivo JSON

            response = {'status': 'success', 'message': 'Datos del reporte enviados correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': f'Error al procesar datos JSON: {e}'}

        self.send_response(200)  # Enviar código de respuesta HTTP 200 OK
        self.send_header('Content-type', 'application/json')  # Establecer el tipo de contenido como JSON
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Controlar la caché del cliente
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(json.dumps(response).encode('utf-8'))  # Escribir la respuesta JSON en el cuerpo de la respuesta

    def handle_menu_update(self):
        """
        Maneja una solicitud POST para actualizar los datos del menú en el servidor.

        Lee los datos del menú del cuerpo de la solicitud POST, los valida y los guarda en el archivo JSON de menú.
        Después de guardar los datos, responde al cliente con un mensaje JSON indicando el estado de la operación.

        Respuestas:
            - En caso de éxito, devuelve un mensaje JSON con estado 'success' y un mensaje informativo.
            - En caso de error al procesar los datos JSON, devuelve un mensaje JSON con estado 'error' y detalles del error.

        """
        content_length = int(self.headers['Content-Length'])  # Obtener la longitud del contenido del cuerpo de la solicitud
        post_data = self.rfile.read(content_length).decode('utf-8')  # Leer y decodificar el cuerpo de la solicitud

        try:
            data = json.loads(post_data)  # Convertir los datos del cuerpo de la solicitud a un objeto Python
            with open(MENU_JSON_FILE, 'w') as json_file:
                json.dump(data, json_file, indent=4)  # Guardar los datos del menú en el archivo JSON

            response = {'status': 'success', 'message': 'Datos del menú guardados correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': f'Error al procesar datos JSON: {e}'}

        self.send_response(200)  # Enviar código de respuesta HTTP 200 OK
        self.send_header('Content-type', 'application/json')  # Establecer el tipo de contenido como JSON
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Controlar la caché del cliente
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(json.dumps(response).encode('utf-8'))  # Escribir la respuesta JSON en el cuerpo de la respuesta
    
    def handle_anuncio_update(self):
        """
        Maneja una solicitud POST para actualizar los datos de un anuncio en el servidor.

        Lee los datos del anuncio del cuerpo de la solicitud POST, los valida y los guarda en el archivo JSON de anuncios.
        Después de guardar los datos, responde al cliente con un mensaje JSON indicando el estado de la operación.

        Respuestas:
            - En caso de éxito, devuelve un mensaje JSON con estado 'success' y un mensaje informativo.
            - En caso de error al procesar los datos JSON, devuelve un mensaje JSON con estado 'error' y detalles del error.

        """
        content_length = int(self.headers['Content-Length'])  # Obtener la longitud del contenido del cuerpo de la solicitud
        post_data = self.rfile.read(content_length).decode('utf-8')  # Leer y decodificar el cuerpo de la solicitud

        try:
            data = json.loads(post_data)  # Convertir los datos del cuerpo de la solicitud a un objeto Python
            with open(ANUNCIOS_JSON_FILE, 'r') as json_file:
                anuncios = json.load(json_file)  # Cargar los anuncios existentes desde el archivo JSON

            anuncios = self.rotate_entries(anuncios, 'anuncio', 4, data['anuncio'])  # Rotar los datos del anuncio

            with open(ANUNCIOS_JSON_FILE, 'w') as json_file:
                json.dump(anuncios, json_file, indent=4)  # Guardar los datos actualizados de los anuncios en el archivo JSON

            response = {'status': 'success', 'message': 'Datos del anuncio guardados correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': f'Error al procesar datos JSON: {e}'}

        self.send_response(200)  # Enviar código de respuesta HTTP 200 OK
        self.send_header('Content-type', 'application/json')  # Establecer el tipo de contenido como JSON
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Controlar la caché del cliente
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(json.dumps(response).encode('utf-8'))  # Escribir la respuesta JSON en el cuerpo de la respuesta

    def handle_image_upload(self):
        """
        Maneja una solicitud POST para subir una imagen al servidor.

        Lee los datos binarios de la imagen del cuerpo de la solicitud POST multipart/form-data,
        extrae la imagen y la guarda en el directorio de subidas (UPLOADS_DIR).

        Responde al cliente con un mensaje JSON indicando el estado de la operación y la ruta de la imagen subida.

        Respuestas:
            - En caso de éxito, devuelve un mensaje JSON con estado 'success', un mensaje informativo y la ruta de la imagen subida.
            - En caso de que no se encuentre la imagen en los datos de la solicitud, devuelve un mensaje JSON con estado 'error'.
            - En caso de cualquier error durante el proceso, captura la excepción, registra el error y devuelve un mensaje JSON con estado 'error'.

        """
        try:
            content_length = int(self.headers['Content-Length'])  # Obtener la longitud del contenido del cuerpo de la solicitud
            post_data = self.rfile.read(content_length)  # Leer los datos binarios del cuerpo de la solicitud

            boundary = self.headers['Content-Type'].split("=")[1].encode('utf-8')  # Obtener el límite del multipart/form-data
            parts = post_data.split(b"--" + boundary)  # Dividir los datos en partes usando el límite

            for part in parts:
                if b'Content-Disposition' in part and b'name="image"; filename="' in part:
                    header, file_data = part.split(b"\r\n\r\n", 1)  # Separar la cabecera de los datos del archivo
                    file_data = file_data.rstrip(b"\r\n")  # Eliminar cualquier retorno de carro adicional al final
                    filename = header.split(b'filename="')[1].split(b'"')[0].decode('utf-8')  # Obtener el nombre del archivo

                    file_path = os.path.join(UPLOADS_DIR, filename)  # Crear la ruta completa del archivo a guardar
                    with open(file_path, 'wb') as file:
                        file.write(file_data)  # Escribir los datos del archivo en el archivo local

                    response = {'status': 'success', 'message': 'Imagen subida correctamente', 'file_path': '/uploads/' + filename}
                    break
            else:
                response = {'status': 'error', 'message': 'No se encontró la imagen en los datos de la solicitud'}

        except Exception as e:
            logging.error(f"Error al subir la imagen: {e}")  # Registrar cualquier error en el registro de errores
            response = {'status': 'error', 'message': f'Error al subir la imagen: {e}'}

        self.send_response(200)  # Enviar código de respuesta HTTP 200 OK
        self.send_header('Content-type', 'application/json')  # Establecer el tipo de contenido como JSON
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Controlar la caché del cliente
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(json.dumps(response).encode('utf-8'))  # Escribir la respuesta JSON en el cuerpo de la respuesta

    def handle_destacada_update(self):
        """
        Maneja una solicitud POST para actualizar las noticias destacadas en el servidor.

        Lee los datos JSON del cuerpo de la solicitud POST, añade la nueva noticia destacada
        al archivo JSON existente (o crea uno nuevo si no existe), y responde al cliente con
        un mensaje JSON indicando el estado de la operación.

        Respuestas:
            - En caso de éxito, devuelve un mensaje JSON con estado 'success' y un mensaje informativo.
            - En caso de error al procesar los datos JSON, devuelve un mensaje JSON con estado 'error'.

        """
        content_length = int(self.headers['Content-Length'])  # Obtener la longitud del contenido del cuerpo de la solicitud
        post_data = self.rfile.read(content_length).decode('utf-8')  # Leer y decodificar los datos JSON del cuerpo de la solicitud

        try:
            data = json.loads(post_data)  # Convertir los datos JSON en un diccionario Python
            now = datetime.now()  # Obtener la fecha y hora actual
            formatted_date = now.strftime("%Y-%m-%d")  # Formatear la fecha como YYYY-MM-DD

            if os.path.exists(DESTACADA_JSON_FILE):  # Verificar si el archivo JSON de destacadas existe
                with open(DESTACADA_JSON_FILE, 'r') as json_file:
                    destacadas = json.load(json_file)  # Cargar las noticias destacadas existentes desde el archivo JSON
            else:
                destacadas = []  # Si el archivo no existe, inicializar una lista vacía

            nueva_destacada = {
                'fecha': formatted_date,
                'titular': data['titulo'],
                'contenido': data['contenido'],
                'tipo': data['tipo'],
                'ruta': data['ruta']
            }

            destacadas = self.rotate_entries(destacadas, 'destacada', 3, nueva_destacada)  # Rotar las entradas de destacadas

            with open(DESTACADA_JSON_FILE, 'w') as json_file:
                json.dump(destacadas, json_file, indent=4)  # Guardar las destacadas actualizadas en el archivo JSON

            response = {'status': 'success', 'message': 'Destacada publicada correctamente'}  # Preparar respuesta de éxito
        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': f'Error al procesar datos JSON: {e}'}  # Capturar errores de decodificación JSON

        self.send_response(200)  # Enviar código de respuesta HTTP 200 OK
        self.send_header('Content-type', 'application/json')  # Establecer el tipo de contenido como JSON
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Controlar la caché del cliente
        self.end_headers()  # Finalizar encabezados de la respuesta
        self.wfile.write(json.dumps(response).encode('utf-8'))  # Escribir la respuesta JSON en el cuerpo de la respuesta

    def rotate_entries(self, data, prefix, max_entries, new_entry):
        """
        Rota las entradas en un diccionario `data` con claves prefijadas por `prefix`, asegurando un máximo de `max_entries`.

        Args:
            data (dict): El diccionario que contiene las entradas a rotar.
            prefix (str): El prefijo utilizado para las claves en `data`.
            max_entries (int): El número máximo de entradas a mantener.
            new_entry (dict): La nueva entrada a insertar en `data`.

        Returns:
            dict: El diccionario rotado `data` con la nueva entrada añadida.

        """
        for i in range(max_entries, 1, -1):
            # Desplaza las entradas hacia abajo para hacer espacio para la nueva entrada
            data[f"{prefix}-{i}"] = data.get(f"{prefix}-{i-1}", {})

        data[f"{prefix}-1"] = new_entry  # Inserta la nueva entrada en la primera posición

        return data

# Inicia el servidor en el puerto especificado
with socketserver.ThreadingTCPServer(("", PORT), Handler) as httpd:
    logging.info(f"Servidor iniciado en el puerto {PORT}")
    httpd.serve_forever()
