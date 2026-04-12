"use client";

import Image from "next/image";
import { useState } from "react";

import HeroSection from "@/app/section/hero-section/hero-section";
import ColorPalette from "@/app/section/generated-palatte/generated-palette";
import InputSection from "@/app/section/input-section/input-section";


import NavBar from "@/app/components/layout/nav-bar";
import GeneratedPalette from "@/app/section/generated-palatte/generated-palette";
import SimilarThemes from "@/app/section/recommendation/similar-themes";
import ThemeReview from "@/app/section/theme-review/theme-review";
import Footer from "@/app/components/layout/footer";

export default function Home() {
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
