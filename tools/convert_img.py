from PIL import Image
import os

def convert_to_webp(input_dir, output_dir):

    # Recorre todas las imágenes en el directorio de entrada
    for filename in os.listdir(input_dir):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
            # Carga la imagen utilizando Pillow
            image_path = os.path.join(input_dir, filename)
            img = Image.open(image_path)

            # Construye la ruta de salida con el mismo nombre de archivo pero extensión .webp
            output_path = os.path.join(output_dir, os.path.splitext(filename)[0] + ".webp")

            # Convierte y guarda la imagen en formato WebP
            img.save(output_path, "WEBP")
            # Eliminamos la versión anterior de la imagen
            os.remove(image_path)