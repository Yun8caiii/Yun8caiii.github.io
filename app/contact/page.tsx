"use client"
export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className= "mb-8">Interested in my work? Get in touch and send me a message!</div>
        <form
          className="w-full max-w-lg rounded-lg shadow p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-medium mb-2"
            >
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
            <label
              htmlFor="email"
              className="block font-medium mb-2"
            >
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
    );
  }
  