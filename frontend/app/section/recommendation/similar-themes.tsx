import { useState } from "react";

type ThemeColor = { name: string; code: string };

type SimilarTheme = {
  id: string;
  percentage: number;
  name: string;
  description: string;
  colors: ThemeColor[];
  gradientFrom: string;
  gradientTo: string;
  /** Describes the gradient preview for assistive tech */
  gradientAlt: string;
  badgeVariant: "primary" | "tertiary" | "error";
};

export default function SimilarThemes() {
  const [themes] = useState<SimilarTheme[]>([
        {
            id: "LX-402",
            percentage: 98,
            name: "Lumina Slate",
            description: "Cool tones, geometric form, high precision.",
            gradientFrom: "#0052d0",
            gradientTo: "#272e42",
            gradientAlt:
              "Cool gradient from vivid blue to deep slate with a precise, technical feel",
            badgeVariant: "primary",
            colors: [
              { name: "", code: "#272e42" },
              { name: "", code: "#0052d0" },
              { name: "", code: "#a5adc6" },
            ],
          },
          {
            id: "AM-112",
            percentage: 82,
            name: "Velvet Dusk",
            description: "Warm shadows, organic radii, soft contrast.",
            gradientFrom: "#8d3a8b",
            gradientTo: "#400042",
            gradientAlt:
              "Deep moody gradient of orchid and dark plum colors with subtle grain texture",
            badgeVariant: "tertiary",
            colors: [
              { name: "", code: "#8d3a8b" },
              { name: "", code: "#4d5d73" },
              { name: "", code: "#f6f6ff" },
            ],
          },
          {
            id: "ET-908",
            percentage: 75,
            name: "Crimson Edge",
            description: "High energy, sharp edges, bold typography.",
            gradientFrom: "#b31b25",
            gradientTo: "#570008",
            gradientAlt:
              "Dramatic gradient shift from vivid crimson red to deep burgundy black shadow",
            badgeVariant: "error",
            colors: [
              { name: "", code: "#b31b25" },
              { name: "", code: "#272e42" },
              { name: "", code: "#ffffff" },
            ],
          },
          {
            id: "CL-220",
            percentage: 68,
            name: "Cloud Canvas",
            description: "Minimalist, vast whitespace, airy feel.",
            gradientFrom: "#eef0ff",
            gradientTo: "#d1dcff",
            gradientAlt:
              "Ultra soft ethereal gradient of cloud white and pale sky blue with frosted finish",
            badgeVariant: "primary",
            colors: [
              { name: "", code: "#f6f6ff" },
              { name: "", code: "#d1dcff" },
              { name: "", code: "#a5adc6" },
            ],
          },
  ]);

  return (
    <div id="similar-themes">
      <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-gray-500">
        Neural Matching
      </span>
      <h2 className="font-headline mb-4 text-4xl font-extrabold tracking-tighter">
        Similar Curation Path
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="border-outline-variant/5 bg-surface-container-lowest group overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl"
          >
            <div
              className="h-40"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${theme.gradientFrom}, ${theme.gradientTo})`,
              }}
              aria-label={theme.gradientAlt}
            />
            <div className="p-6 bg-white">
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: theme.gradientFrom,
                    color: theme.colors.at(-1)?.code,
                  }}
                >
                  {theme.percentage}% Match
                </span>
                <span className="text-gray-500 font-mono text-[10px]">
                  ID: {theme.id}
                </span>
              </div>
              <h4 className="mb-2 text-lg font-bold">{theme.name}</h4>
              <p className="text-gray-500 mb-6 text-xs">
                {theme.description}
              </p>
              <div className="flex -space-x-2">
                {theme.colors.map((c) => (
                  <div
                    key={c.code}
                    className="h-6 w-6 rounded-full border-2"
                    style={{ backgroundColor: c.code }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
