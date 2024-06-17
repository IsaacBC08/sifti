import os
commit = input("Que cambios se guardaron? ")
os.system("git add .")
os.system(f"git commit -m '{commit}'")