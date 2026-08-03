'use client'

import HeroSection from "@/components/landing/HeroSection";
import ProjectList from "@/components/landing/ProjectList";
import Contacts from "@/components/landing/Contacts";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto w-full">
      <HeroSection/>
      <ProjectList/>
      <Contacts/>
    </main>
  )
}
