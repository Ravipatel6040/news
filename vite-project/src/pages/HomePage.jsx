import React from "react";
import HeroSection from "../components/HeroSection";
import TrendingStories from "../components/TrendingStories";
import CategoriesSection from "../components/CategoriesSection";
import FeaturesHighlight from "../components/FeaturesHighlight";
import Footer from "../components/Footer";
import FAQ from "../components/Faq"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <main className="flex-1">
        <HeroSection />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <TrendingStories />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <CategoriesSection />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <FeaturesHighlight />
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
         <FAQ/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
