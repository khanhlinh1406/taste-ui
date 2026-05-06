# Token Application (Luminance Mapping)

This document explains how to transform raw K-Means clusters into a structured Design System using **Perceptive Luminance**.

---

# 🎯 Feature Overview

## What are we building?

An intelligent mapper that:

1. Takes 5–6 raw colors from K-Means.
2. Analyzes their **Visual Weight** (Brightness & Saturation).
3. Assigns them to specific UI roles (Surface, Primary, Text) to ensure accessibility.

---

# 🧠 Core Idea (The Challenge)

K-Means returns colors in random order based on pixel density.

### ❗ The Problem:

If K-Means returns White as `Color 1` and Light Blue as `Color 2`, but your UI uses:

* `Color 1` for background
* `Color 2` for text

→ **Zero Contrast! (Unreadable UI)**

### ✅ The Solution:

```
Raw Colors → Luminance Calculation → Sorting → Role Assignment → Design Tokens
```

---

# 🧩 Step 1: Human Perception vs. Raw Data

## Why not just use (R + G + B) / 3?

The human eye is more sensitive to **Green** than **Blue**, so a simple average does not reflect real perceived brightness (http://googleusercontent.com/image_content/191).

## 🎯 Perceptive Luminance Formula

L = 0.299R + 0.587G + 0.114B

* **High L (~1.0):** Near White → Best for Backgrounds
* **Low L (~0.0):** Near Black → Best for Text / Icons

---

# 🧠 Concept 1: Feature Engineering

In Machine Learning, we often create **derived features** to help decision-making.

Here, we compute:

* **Luminance** → brightness perception
* **Saturation** → color intensity

## Code (Python)

```python
import colorsys

def get_luminance(rgb):
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255

def get_saturation(rgb):
    # Convert RGB to HLS (Hue, Lightness, Saturation)
    h, l, s = colorsys.rgb_to_hls(rgb[0]/255, rgb[1]/255, rgb[2]/255)
    return s
```

---

# 🧩 Step 2: Sorting for Hierarchy

Once we have Luminance values, we sort colors to establish visual hierarchy.

## Sorting Strategy

```python
sorted_colors = sorted(raw_colors, key=get_luminance, reverse=True)
```

* **Index 0:** Brightest color → `"Surface"`
* **Index -1:** Darkest color → `"On Surface"`

---

# 🧩 Step 3: Smart Role Assignment

This is where the system becomes **intelligent**, not just mechanical.

We assign roles based on **visual meaning**, not raw position.

## 🎯 Mapping Logic

* **Surface:** Brightest color → clean background
* **On Surface:** Darkest color → readable text
* **Primary:** Most vibrant color (highest saturation) among remaining colors

👉 This avoids picking a dull gray as your main action color.

## Code

```python
# Exclude extreme colors (white/black)
mid_colors = sorted_colors[1:-1]

# Pick the most vibrant color
primary = max(mid_colors, key=get_saturation)
```

---

# 🧠 Concept 2: Semantic Tokens

Traditional frontend:

👉 Static Theme

> "Use Blue for buttons"

AI-driven UI:

👉 Generative Tokens

> "Use the most vibrant color extracted from the image for buttons"

---

# ⚡ Performance Optimization

* **Color Space Conversion:**
  Use `colorsys` (Python built-in) for fast RGB → HLS conversion.

* **Early Exit Strategy:**
  If the image has extremely low contrast → fallback to a predefined accessible palette.

---

# 🚀 Enhancement (Next Step)

## Contrast Ratio Validation

Ensure accessibility with WCAG standards:

* Check:

  ```
  Contrast(Primary, Surface) > 4.5:1
  ```

* If it fails:

  * Automatically adjust (lighten/darken) the Primary color
  * Iterate until it meets accessibility threshold

👉 This is where rule-based logic can evolve into **AI-assisted refinement**.
