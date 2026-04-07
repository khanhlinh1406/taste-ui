import { useState } from "react";

type Palette = {
    name: string;
    code: string;
}

export default function GeneratedPalette() {
  const [colors] = useState<Palette[]>([
    { name: "Primary", code: "#0052D0" },
    { name: "Secondary", code: "#4D5D73" },
    { name: "Tertiary", code: "#8D3A8B" },
    { name: "Accent", code: "#D1DCFF" },
    { name: "On Surface", code: "#272E42" },
    { name: "Outline", code: "#6F768E"}
  ]);
  return (
    <div id="generated-palete py-6">
      <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-gray-500">
        Live Curation
      </span>
      <h2 className="font-headline mb-4 text-4xl font-extrabold tracking-tighter">
        Generated Palette
      </h2>
      <div className="flex justify-end gap-2 font-bold text-blue-500">
        Refine Swatches
        <span className="material-symbols-outlined">tune</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-6">
        {colors.length > 0 &&
          colors.map((color) => (
            <div key={color.code}>
              <div
                className="mb-3 h-48 rounded-xl shadow-lg transition-transform group-hover:-translate-y-2 
                hover:shadow-gray-400 hover:scale-105"
                style={{ backgroundColor: color.code }}
              />
              <p className="mb-1 text-xs font-bold uppercase tracking-widest">
                {color.name}
              </p>
              <p className="text-on-surface-variant font-mono text-sm">
                {color.code}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
