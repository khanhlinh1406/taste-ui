import { DEFAULT_SMILAR_THEME } from "@/app/data/similar-theme";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

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
  const [themes] = useState<SimilarTheme[]>(DEFAULT_SMILAR_THEME as SimilarTheme[]);

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

          <Card key={theme.id}
            className="group overflow-hidden rounded-2xl border-opacity-50 shadow-sm transition-all hover:shadow-xl py-0 gap-0"
          >
            <div
              className="h-40 w-full"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${theme.gradientFrom}, ${theme.gradientTo})`,
              }}
              aria-label={theme.gradientAlt}
            />

            <CardContent className="p-4">
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
                <span className="text-muted-foreground font-mono text-[10px]">
                  ID: {theme.id}
                </span>
              </div>

              <h4 className="mb-2 text-lg font-bold tracking-tight">{theme.name}</h4>
              <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                {theme.description}
              </p>

              <div className="flex -space-x-2">
                {theme.colors.map((c) => (
                  <div
                    key={c.code}
                    className="h-6 w-6 rounded-full border-2 border-background"
                    style={{ backgroundColor: c.code }}
                    title={c.name}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
