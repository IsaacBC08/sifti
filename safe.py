import subprocess

# Obtener el mensaje del commit del usuario
commit = input("¿Qué cambios se guardaron? ")

try:
    # Ejecutar los comandos de git
    subprocess.run(["git", "add", "."], check=True)
    print(commit)
    subprocess.run(["git", "commit", "-m", commit], check=True)
    subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
except subprocess.CalledProcessError as e:
    print(f"Error en el comando git: {e}")
