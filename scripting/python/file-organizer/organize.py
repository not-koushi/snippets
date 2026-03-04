import os
import shutil

path = "."

for file in os.listdir(path):
    if os.path.isfile(file):
        ext = file.split(".")[-1]
        folder = os.path.join(path, ext)

        os.makedirs(folder, exist_ok=True)
        shutil.move(file, os.path.join(folder, file))