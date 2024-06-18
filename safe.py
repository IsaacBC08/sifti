import os
commit = input("Que cambios se guardaron? ")
os.system("git add .")
print(commit)
os.system(f"git commit -m {commit}")
os.system("git push -u origin main")