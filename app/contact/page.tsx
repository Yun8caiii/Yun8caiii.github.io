"use client";
import {
  HoveredLink,
  Menu,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
export default function ContactPage() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="mb-8">
          Interested in my work? Get in touch and send me a message!
        </div>
        <form
          className="w-full max-w-lg rounded-lg shadow p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
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
        <HoveredLink href="/#projects">Projects</HoveredLink>
        <HoveredLink href="https://medium.com/@yun8caiii">Blogs</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
