"use client";

import Image from "next/image";
import { useState } from "react";
import HeroSection from "@/components/hero-section/hero-section";
import ImageUpload from "@/components/input-section/image-upload";
import ColorPalette from "@/components/generated-palatte/generated-palette";

export default function Home() {
  const [colors, setColors] = useState<number[][]>([]);
  return (
    <main className="space-y-12 p-10">
      <section>
        <HeroSection></HeroSection>
      </section>

      <ImageUpload></ImageUpload>
      {
        colors.length > 0 && (
          <ColorPalette></ColorPalette>
        )
      }
    </main>
  );
}
