"use client";

import Image from "next/image";
import { useState } from "react";

import HeroSection from "@/components/hero-section/hero-section";
import ImageUpload from "@/components/input-section/image-upload";
import ColorPalette from "@/components/generated-palatte/generated-palette";
import InputSection from "@/components/input-section/input-section";


import NavBar from "@/components/commons/nav-bar";
import GeneratedPalette from "@/components/generated-palatte/generated-palette";
import SimilarThemes from "@/components/recommendation/similar-themes";
import ThemeReview from "@/components/theme-review/theme-review";
import Footer from "@/components/commons/footer";

export default function Home() {
  const [colors, setColors] = useState<number[][]>([]);
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main className="space-y-12 p-10 bg-gray-50">
        <section className="py-6">
          <HeroSection></HeroSection>
        </section>

        <section className="py-6">
          <InputSection></InputSection>
        </section>

        <section className="py-6">
          <GeneratedPalette></GeneratedPalette>
        </section>

        <section className="py-6">
          <ThemeReview></ThemeReview>
        </section>

        <section className="py-6">
          <SimilarThemes></SimilarThemes>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
