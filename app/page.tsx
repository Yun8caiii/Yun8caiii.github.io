"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Cpu, Search, Star } from "lucide-react";

export default function Home() {
  const handleScroll = () => {
    const target = document.querySelector("#features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("/koipond.gif")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010818] z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Yun Cai
            <span className="inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-pulse">
                Freelance Software Engineer & Innovator
              </span>
            </span>
          </h1>

          <p className="text-light-green mb-10 mx-auto">
            I'm a passionate freelancer who crafts innovative software
            solutions. Explore my portfolio to see how I solve problems,
            create impactful projects, and help clients achieve their goals.
          </p>
          <Link href="#features">
            <Button
              size="lg"
              className="bg-red-accent hover:bg-purple-accent text-white text-lg px-4 md:px-8 py-2 md:py-4"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleScroll}
        className="fixed bottom-20 right-4 bg-blue-500 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 z-50"
      >
        <ArrowDown className="w-6 h-6" />
      </button>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 bg-dark-green text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-20 text-light-green">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="w-12 h-12 text-purple-accent" />}
              title="Freelance Expertise"
              description="I deliver high-quality freelance services, from web development to embedded systems, tailored to meet your unique needs."
            />
            <FeatureCard
              icon={<Search className="w-12 h-12 text-light-green" />}
              title="Innovative Problem-Solving"
              description="I approach challenges creatively, building solutions that are efficient, reliable, and impactful."
            />
            <FeatureCard
              icon={<Star className="w-12 h-12 text-red-accent" />}
              title="Collaborative Partner"
              description="I work closely with clients to bring their ideas to life, ensuring every project exceeds expectations."
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-deep-blue text-white py-32 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-light-green">
            Let's Collaborate and Build Something Amazing
          </h2>
          <p className="text-xl mb-8 mx-auto text-light-green">
            Whether you're an individual, startup, or established business, I'm
            here to help. Together, we can turn your ideas into reality with
            creative and reliable software solutions.
          </p>
          <Link href="/contact" className="w-full md:w-auto">
          
          <Button
            size="lg"
            className="bg-purple-accent hover:bg-red-accent text-white px-4 md:px-8 py-2 md:py-4"
          >
            Get in Touch
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}
