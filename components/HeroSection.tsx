const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center -mt-32 bg-black bg-opacity-50 z-0">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent bg-black z-0"></div>

      <div className="relative z-10 flex flex-col items-start justify-center px-4 w-full max-w-4xl text-left mt-36 -mb-16">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 px-16">
          Hi, I&apos;m Yun Cai 🦍
          <span className="block text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse leading-none pt-2">
              <span className="text-4xl md:text-5xl text-orange-600 animate-bounce-more">
                Strongest
              </span>{" "}
              tech enthusiast, start up founder, full-stack web developer, and
              freelancer.
            </span>
          </span>
        </h1>
        <div className="md:text-xl mb-6 px-16">
          <h2 className="text-white text-base">About</h2>
          <p className="text-gray-500 text-sm">
            I&apos;m Yun. A full-stack developer with a bachelor&apos;s in
            computer engineering/minor in computer science who develops and
            maintains mobile and web applications and has more than 3 years of
            experience in the area. I am an expert on the MERN (MongoDB,
            Express, React, and Node.js) stack. Working on large projects that
            have given me a lot of experience, and I&apos;m proud of both the
            quality of my work and my commitment to learning. My objective is to
            make as many happy customers as I can while also learning as much as
            i can from them.
          </p>
          <h2 className="text-white text-base mt-8">Career</h2>
          <p className="text-gray-500 text-sm">
            I started my journey as a tech enthusiast and self-taught developer
            in my early teens, which paved the way for a fulfilling career in
            technology. Over the years, I have worked on several innovative
            projects and freelanced for multiple clientel in various industries.
            I have also founded a start-up company that focuses on developing
            web and mobile applications for small businesses and individuals. I
            am currently working as a full-stack developer at a tech company,
            where I am responsible for developing and maintaining web
            applications and APIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
