export const API_BASE = 'http://localhost:8000';

export async function extractColors(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE}/extract-colors`, {
        method: "POST",
        body: formData
    });

    return res.json();
}

