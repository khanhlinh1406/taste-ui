# Image to Theme (K-Means) Complete Guide

This document provides a **full explanation + implementation guide** for the Image-to-Theme feature in Taste UI.

---

# 🎯 Feature Overview

## What are we building?

An API that:

1. Accepts an image
2. Extracts dominant colors
3. Returns a clean UI color palette

---

## Example

### Input

* Uploaded image

### Output

```json
{
  "colors": ["#1E3A8A", "#F59E0B", "#10B981", "#EF4444"]
}
```

---

# 🧠 Core Idea (Big Picture)

```
Image → Pixels → Vectors → Clustering → Dominant Colors → UI
```

You are turning:

👉 Raw pixels → Meaningful design tokens

---

# 🧩 Step 1: Image = Data

## What is an image?

An image is a grid of pixels.

Example:

```
200 x 200 image → 40,000 pixels
```

Each pixel:

```
RGB = [R, G, B]
Range: 0 → 255
```

---

# 🧠 Concept 1: Pixel = Vector

Each pixel is a vector in 3D space:

```
[R, G, B] = (x, y, z)
```

So the image becomes:

```
40,000 points in 3D space
```

---

# 🧩 Step 2: Convert Image → Dataset

## Code

```python
pixels = np.array(image)
pixels = pixels.reshape(-1, 3)
```

## Explanation

Before:

```
(200, 200, 3)
```

After:

```
(40000, 3)
```

Now:

* Each row = 1 pixel
* Each pixel = [R, G, B]

👉 This is now a machine learning dataset

---

# 🧠 Concept 2: Distance Between Colors

We need a way to measure similarity.

## Euclidean Distance

```
d = √((r1 - r2)^2 + (g1 - g2)^2 + (b1 - b2)^2)
```

Interpretation:

* Small distance → similar colors
* Large distance → different colors

---

# 🧩 Step 3: K-Means Clustering

## Goal

Group pixels into K clusters

Example:

```
K = 5 → 5 dominant colors
```

---

## Algorithm

1. Pick K random centers
2. Assign each pixel to nearest center
3. Update center (mean of cluster)
4. Repeat until stable

---

## Code

```python
kmeans = KMeans(n_clusters=5)
kmeans.fit(pixels)
```

---

# 🧠 Concept 3: Centroid

Each cluster has a center:

```
centroid = average of all pixels in cluster
```

Example:

```
[255, 0, 0]
[250, 10, 5]
[245, 5, 0]

→ centroid ≈ [250, 5, 2]
```

👉 This becomes a dominant color

---

# 🧩 Step 4: Extract Colors

```python
colors = kmeans.cluster_centers_
```

Output:

```
[
  [123, 45, 67],
  [200, 180, 20]
]
```

---

# 🧩 Step 5: Convert RGB → HEX

```python
def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % tuple(map(int, rgb))
```

---


# ⚡ Performance Optimization

## Resize Image

```
1920x1080 → 2M pixels
200x200 → 40K pixels
```

👉 Faster with same color distribution

---

# ⚠️ Common Mistakes

* Not reshaping data
* Using too large K
* Not converting to RGB
* Processing full-size image

---

# 🧠 Frontend Mental Model

```ts
const pixels = extractPixels(image)

const clusters = autoGroupBySimilarity(pixels, 5)

const colors = clusters.map(c => average(c))
```

---

# 🚀 Enhancement (Next Step)

## Add Color Weight

```json
[
  { "color": "#1E3A8A", "weight": 0.42 }
]
```

## How?

Use:

```python
labels = kmeans.labels_
```

Count occurrences of each cluster.

---

# 🎯 What You Learned

## ML

* Vector representation
* Distance
* Clustering
* Centroid

## Engineering

* Data preprocessing
* API design
* Performance optimization

---

# 🧭 Final Insight

This feature is not just color extraction.

It is:

👉 Converting raw data → structured insight
👉 Applying ML → UI decision
👉 Bridging AI with frontend

---

**End of Document**
