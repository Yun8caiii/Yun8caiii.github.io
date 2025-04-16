"use client";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FooterNav from "@/components/ui/footer-nav";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {

  return (
    <>
    
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>

    <div className="relative min-h-screen bg-black text-gray-900 dark:text-gray-100">
    <Spotlight
        className="fixed top-40 left-20 md:left-80 md:top-20"
        fill="white"
      />
      {/* Hero Section */}
      <HeroSection />
      <FeaturedProjects />
    </div>
    <FooterNav />
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const setActive = useState<string | null>(null)[1];
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="#projects">Projects</HoveredLink>
        <HoveredLink href="https://medium.com/@yun8caiii">Blogs</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
        <HoveredLink href="https://docs.google.com/document/d/1VBhy7bRTChYgSvOyLLQv807290PSWG81/edit?usp=sharing&ouid=103728162006031366965&rtpof=true&sd=true" >Resume</HoveredLink>
      </Menu>
    </div>
  );
}