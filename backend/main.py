from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans
import colorsys

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello World"}

kmeans_colors = []

# Convert the colors to hex format
def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % tuple(map(int, rgb))
    
@app.post("/extract-colors")
def extract_colors(file: UploadFile = File(...)):
    kmeans_colors = []
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
    kmeans_colors = colors

    hex_colors = []

    # Convert the colors to hex format
    name_list = ["Primary", "Secondary", "Tertiary", "Accent", "On Surface", "Outline"]
    for idx, color in enumerate(colors):
        hex_colors.append({
            "name": name_list[idx],
            "code": rgb_to_hex(color),
        })

    return hex_colors

# Perceptive Luminance formula
def get_luminance(rgb):
    r, g, b = rgb
    return (0.299 * r + 0.587 * g + 0.144 * b) / 255

def get_saturation(rgb):
    r, g, b = rgb
    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
    return s

@app.post("/generate-tokens")
def generate_tokens(file: UploadFile = File(...)):
    # sort colors list from lightest to darkest
    sorted_by_luminance = sorted(kmeans_colors, key=get_luminance, reverse=True)

    # find the color that has the highest satuation to be Primary
    # except for white and black
    primary_color = max(sorted_by_luminance[1:-1], key=get_saturation)

    tokens = {
        "surface": rgb_to_hex(sorted_by_luminance[0]),
        "onSurface": rgb_to_hex(sorted_by_luminance[1]),
        "primary": rgb_to_hex(primary_color),
        "secondary": rgb_to_hex(sorted_by_luminance[2]),
        "secondary": rgb_to_hex(sorted_by_luminance[-2])
    }

    return tokens
