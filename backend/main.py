from fastapi import FastAPI, UploadFile, File
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.post("/extract-colors")
def extract_colors(file: UploadFile = File(...)):
    # Resize the image to 200x200 for faster processing
    image = Image.open(file.file).resize((200, 200))
    image = image.convert("RGB")

    # Convert the image to a numpy array
    # original shape: (200, 200, 3)
    # reshaped shape: (200 * 200, 3)    -> (40000, 3)
    pixels = np.array(image)
    pixels = pixels.reshape(-1, 3)

    # Use K-Means to cluster the colors
    # n_clusters: number of colors to extract
    kmeans = KMeans(n_clusters=5)
    kmeans.fit(pixels)
    
    # cluster_centers_: the center of each cluster
    colors = kmeans.cluster_centers_

    hex_colors = []
    # Convert the colors to hex format
    def rgb_to_hex(rgb):
        return '#%02x%02x%02x' % tuple(map(int, rgb))

    # Convert the colors to hex format
    name_list = ["Primary", "Secondary", "Tertiary", "Accent", "On Surface", "Outline"]
    for idx, color in enumerate(colors):
        hex_colors.append({
            "name": name_list[idx],
            "code": rgb_to_hex(color),
        })

    return hex_colors