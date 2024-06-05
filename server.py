import http.server as http_server
import socketserver
import os
import json


PORT = 8080
PASSWORD = "sifti4321"
STATIC_DIR = os.path.join(os.path.dirname(__file__), 'static')
ANUNCIOS_JSON_FILE = os.path.join(os.path.dirname(__file__), 'static/db/anuncios.json')
MENU_JSON_FILE = os.path.join(os.path.dirname(__file__), 'static/db/menu.json')

# Define una nueva clase llamada `Handler` que hereda de `http.server.SimpleHTTPRequestHandler`
class Handler(http_server.SimpleHTTPRequestHandler):
    
    # Define el constructor (método __init__) de la clase `Handler`
    def __init__(self, *args, **kwargs):
        # Llama al constructor de la clase base `SimpleHTTPRequestHandler` con los argumentos y
        # parámetros adicionales. Además, especifica el directorio desde donde se servirán los archivos.
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def do_GET(self):
        # Eliminar cualquier parámetro de consulta de la URL
        self.path = self.path.split('?')[0]
        
        # Construir la ruta completa al archivo solicitado en el directorio estático
        file_path = os.path.join(STATIC_DIR, self.path.lstrip('/'))

        # Verificar si la ruta solicitada es un directorio
        if os.path.isdir(file_path):
            # Si es un directorio, agregar 'inicio.html' al final de la ruta
            self.path = os.path.join(self.path, 'inicio.html')
            # Llamar al método do_GET de la clase base para servir el archivo
            return super().do_GET()
        
        # Verificar si existe un archivo con la extensión .html
        elif os.path.exists(file_path + '.html'):
            # Si existe, agregar '.html' al final de la ruta
            self.path += '.html'
            # Llamar al método do_GET de la clase base para servir el archivo
            return super().do_GET()
        
        else:
            # Si no es un directorio ni un archivo .html, intentar servir el archivo tal cual
            return super().do_GET()

    def do_POST(self):
        # Obtener la dirección IP del cliente
        client_ip = self.client_address[0]
        print(f"Solicitud POST recibida de {client_ip}")
        
        # Verificar si la ruta de la solicitud POST es '/update_menu'
        if self.path == '/update_menu':
            # Llamar al método que maneja la actualización del menú
            self.handle_menu_update()
        
        # Verificar si la ruta de la solicitud POST es '/update_anuncio'
        elif self.path == '/update_anuncio':
            # Llamar al método que maneja la actualización del anuncio
            self.handle_anuncio_update()
        
        else:
            # Si la ruta no coincide con /update_menu o /update_anuncio, responder con 404
            self.send_response(404)  # Enviar una respuesta 404 (No encontrado)
            self.send_header('Content-type', 'text/plain')  # Establecer el tipo de contenido a texto plano
            self.end_headers()  # Finalizar los encabezados de la respuesta
            self.wfile.write(b'Error 404: Not Found')  # Escribir el mensaje de error en el cuerpo de la respuesta

    # Método para manejar la actualización del menú
    def handle_menu_update(self):
        # Obtener la longitud del contenido de los datos POST
        content_length = int(self.headers['Content-Length'])
        
        # Leer los datos POST del cuerpo de la solicitud y decodificarlos a una cadena UTF-8
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            # Intentar cargar los datos POST como JSON
            data = json.loads(post_data)

            # Validar la contraseña antes de procesar la actualización
            if 'password' in data and data['password'] == PASSWORD:
                # Eliminar la contraseña antes de actualizar el archivo JSON
                del data["password"]

                # Actualizar el archivo JSON con los nuevos datos en menu.json
                with open(MENU_JSON_FILE, 'w') as json_file:
                    json.dump(data, json_file, indent=4)

                # Preparar la respuesta exitosa
                response = {'status': 'success', 'message': 'Datos del menú guardados correctamente'}
            else:
                # Preparar la respuesta de error si la contraseña es incorrecta
                response = {'status': 'error', 'message': 'Contraseña incorrecta para actualizar el menú'}

        except json.JSONDecodeError as e:
            # Preparar la respuesta de error si ocurre un error al procesar los datos JSON
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Enviar la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Indicar al navegador que no almacene en caché la respuesta
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))
        
    # Método para manejar la actualización de anuncios
    def handle_anuncio_update(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            data = json.loads(post_data)

            # Validar la contraseña antes de procesar la actualización
            if 'password' in data and data['password'] == PASSWORD:
                del data['password']
                # Aquí podrías validar la contraseña, si es necesario
                # Procesar los datos recibidos, por ejemplo, actualizar anuncios.json
                with open(ANUNCIOS_JSON_FILE, 'w') as json_file:
                    json.dump(data, json_file, indent=4)

                response = {'status': 'success', 'message': 'Datos del anuncio guardados correctamente'}
            else:
                response = {'status': 'error', 'message': 'Datos incompletos o incorrectos recibidos'}

        except json.JSONDecodeError as e:
            response = {'status': 'error', 'message': 'Error al procesar datos JSON'}

        # Enviar la respuesta al cliente
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')  # Indicar al navegador que no almacene en caché la respuesta
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

        
# Crear el servidor con el manejador personalizado
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Todo Correcto")
    print(f"Servidor iniciado en el puerto {PORT}")
    httpd.serve_forever()