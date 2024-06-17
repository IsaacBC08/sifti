import http.server as http_server
import socketserver
import os
import json
from base64 import b64decode

# Configuración del puerto y credenciales de autenticación
PORT = 8080
PASSWORD = "sifti4321"
USERNAME = "Team Sifti" # Nombre de usuario temporal

# Rutas a los directorios y archivos estáticos
STATIC_DIR = os.path.join(os.path.dirname(__file__), 'web')
UPLOADS_DIR = os.path.join(os.path.dirname(__file__), 'uploads') # Nuevo directorio para guardar imágenes
DATABASE_DIR = os.path.join(os.path.dirname(__file__), 'database')
ANUNCIOS_JSON_FILE = os.path.join(DATABASE_DIR, 'db/anuncios.json')
MENU_JSON_FILE = os.path.join(DATABASE_DIR, 'db/menu.json')
REPORTES_JSON_FILE = os.path.join(DATABASE_DIR, 'db/reportes.json')
DESTACADA_JSON_FILE = os.path.join(DATABASE_DIR, 'db/noticias.json')
# Asegúrate de que el nuevo directorio de imágenes existe
os.makedirs(UPLOADS_DIR, exist_ok=True)

# Definición de la clase Handler que manejará las solicitudes HTTP
class Handler(http_server.SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        # Inicializa el manejador con la configuración del directorio estático
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def do_GET(self):
        # Elimina cualquier parámetro de consulta de la URL
        self.path = self.path.split('?')[0]

        # Protege la ruta '/host' con autenticación básica
        if self.path == '/host':
            if not self.is_authenticated():
                self.send_auth_request()
                return

        # Maneja la ruta /uploads para servir archivos desde el directorio de uploads
        if self.path.startswith('/uploads'):
            file_path = os.path.join(UPLOADS_DIR, self.path.lstrip('/uploads'))
            if os.path.exists(file_path):
                self.send_response(200)
                self.send_header('Content-type', 'application/octet-stream')
                self.end_headers()
                with open(file_path, 'rb') as file:
                    self.wfile.write(file.read())
                return
            else:
                self.send_response(404)
                self.end_headers()
                self.wfile.write(b'Error 404: Not Found')
                return

        file_path = os.path.join(STATIC_DIR, self.path.lstrip('/'))

        # Si la ruta es un directorio, devuelve el archivo 'inicio.html'
        if os.path.isdir(file_path):
            self.path = os.path.join(self.path, 'inicio.html')
            return super().do_GET()
        
        # Si la ruta existe como archivo HTML, añade la extensión '.html'
        elif os.path.exists(file_path + '.html'):
            self.path += '.html'
            return super().do_GET()
        
        # En otros casos, maneja la solicitud como de costumbre
        else:
            return super().do_GET()

    def do_POST(self):
        # Obtiene la dirección IP del cliente que realiza la solicitud
        client_ip = self.client_address[0]
        print(f"Solicitud POST recibida de {client_ip}")

        # Maneja diferentes rutas de POST para actualizar menú, anuncios y reportes
        if self.path == '/update_menu':
            self.handle_menu_update()
        elif self.path == '/update_anuncio':
            self.handle_anuncio_update()
        elif self.path == '/send_report':
            self.handle_send_report()
        elif self.path == '/update_destacadas':
            self.handle_destacada_update()
        elif self.path == '/upload_image':
            self.handle_image_upload()
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Error 404: Not Found')

    def is_authenticated(self):
        # Verifica si el encabezado de autorización está presente
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
        # Envía una solicitud de autenticación al cliente
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Basic realm="Protected Area"')
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Usuario no autorizado.')

    def handle_send_report(self):
        # Maneja la solicitud para enviar un reporte
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        try:
            data = json.loads(post_data)
            with open(REPORTES_JSON_FILE, 'r') as json_file:
                reportes = json.load(json_file)

            # Actualiza el archivo de reportes manteniendo solo los 10 más recientes
            if 'report-10' in reportes:
                reportes['report-9'] = reportes['report-10']
            if 'report-9' in reportes:
                reportes['report-8'] = reportes['report-9']
            if 'report-8' in reportes:
                reportes['report-7'] = reportes['report-8']
            if 'report-7' in reportes:
                reportes['report-6'] = reportes['report-7']
            if 'report-6' in reportes:
                reportes['report-5'] = reportes['report-6']
            if 'report-5' in reportes:
                reportes['report-4'] = reportes['report-5']
            if 'report-4' in reportes:
                reportes['report-3'] = reportes['report-4']
            if 'report-3' in reportes:
                reportes['report-2'] = reportes['report-3']
            if 'report-2' in reportes:
                reportes['report-1'] = reportes['report-2']
            if 'report-1' in reportes:
                reportes['report-1'] = data['report']

            # Guarda los reportes actualizados en el archivo JSON
            with open(REPORTES_JSON_FILE, 'w') as json_file:
                json.dump(reportes, json_file, indent=4)

                response = {'status': 'success', 'message': 'Datos del reporte enviados correctamente'}
        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Envía la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def handle_menu_update(self):
        # Maneja la solicitud para actualizar el menú
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            data = json.loads(post_data)
            
            # Guarda los datos actualizados en el archivo JSON del menú
            with open(MENU_JSON_FILE, 'w') as json_file:
                json.dump(data, json_file, indent=4)

            response = {'status': 'success', 'message': 'Datos del menú guardados correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Envía la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))
        
    def handle_anuncio_update(self):
        # Maneja la solicitud para actualizar los anuncios
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            data = json.loads(post_data)
            with open(ANUNCIOS_JSON_FILE, 'r') as json_file:
                anuncios = json.load(json_file)

            # Actualiza el archivo de anuncios manteniendo solo los 4 más recientes
            anuncios['anuncio-4'] = anuncios['anuncio-3']
            anuncios['anuncio-3'] = anuncios['anuncio-2']
            anuncios['anuncio-2'] = anuncios['anuncio-1']
            anuncios['anuncio-1'] = data['anuncio']

            # Guarda los anuncios actualizados en el archivo JSON
            with open(ANUNCIOS_JSON_FILE, 'w') as json_file:
                json.dump(anuncios, json_file, indent=4)

            response = {'status': 'success', 'message': 'Datos del anuncio guardados correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Envía la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def handle_image_upload(self):
        print("Se llama la img")
        try:
            # Maneja la solicitud para subir una imagen
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            boundary = self.headers['Content-Type'].split("=")[1].encode('utf-8')
            parts = post_data.split(b"--" + boundary)

            for part in parts:
                if b'Content-Disposition' in part and b'name="image"; filename="' in part:
                    # Extrae el nombre del archivo
                    header, file_data = part.split(b"\r\n\r\n", 1)
                    file_data = file_data.rstrip(b"\r\n")
                    filename = header.split(b'filename="')[1].split(b'"')[0].decode('utf-8')

                    # Guarda la imagen en el directorio de imágenes
                    file_path = os.path.join(UPLOADS_DIR, filename)
                    with open(file_path, 'wb') as file:
                        file.write(file_data)

                    response = {'status': 'success', 'message': 'Imagen subida correctamente', 'file_path': '/uploads/' + filename}
                    break
        except json.JSONDecodeError as e:
            print("sale mal")
            print("Error al decodificar JSON:", str(e))  # Imprime el error específico
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Envía la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))
        
    def handle_destacada_update(self):
        # Maneja la solicitud para actualizar las noticias
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')

        try:
            data = json.loads(post_data)

            # Obtener la fecha y hora actual
            now = self.get_current_date()
            formatted_date = now.strftime("%Y-%m-%d")

            # Abrir el archivo de noticias existente o crear uno nuevo si no existe
            if os.path.exists(DESTACADA_JSON_FILE):
                with open(DESTACADA_JSON_FILE, 'r') as json_file:
                    destacadas = json.load(json_file)


            # Crear un nuevo objeto de noticia con los datos recibidos y la fecha actual
            nueva_destacada = {
                'fecha': formatted_date,
                'titular': data['titulo'],
                'contenido': data['contenido'],
                'tipo': data['tipo'],
                'ruta' : data['ruta']
            }
            # Agregar la nueva noticia a la lista de destacadas
            destacadas["destacada-3"] = destacadas["destacada-2"]
            destacadas["destacada-2"] = destacadas["destacada-1"]
            destacadas["destacada-1"] = nueva_destacada

            # Guardar las noticias actualizadas en el archivo JSON
            with open(DESTACADA_JSON_FILE, 'w') as json_file:
                json.dump(destacadas, json_file, indent=4)

            response = {'status': 'success', 'message': 'Destacada publicada correctamente'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Envía la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def get_current_date(self):
        # Retorna la fecha y hora actual en formato ISO 8601
        from datetime import datetime
        return datetime.now()
    
    
# Inicia el servidor en el puerto especificado
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Servidor iniciado en el puerto", PORT)
    httpd.serve_forever()
