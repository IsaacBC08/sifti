def upload_datas(commit = "Inserción de datos al servidor"):
	import subprocess
	try:
		# Ejecutar los comandos de git
		subprocess.run(["git", "add", "."], check=True)
		print(commit)
		subprocess.run(["git", "commit", "-m", commit], check=True)
		subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
	except subprocess.CalledProcessError as e:
		print(f"Error en el comando git: {e}")
  
commit = input("Nombre del Commit: ")
upload_datas(commit)