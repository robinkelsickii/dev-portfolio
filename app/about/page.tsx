import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto p-6 gap-8">
        {/* Placeholder Picture */}
        <div className="flex-shrink-0">
          <div className="w-500 h-500 rounded-lg">
            {/* Replace with an actual image */}
            <Image
              src="/img/ai-portrait.png"
              alt="An AI picture of me"
              className="object-cover w-full h-full rounded-lg pt-16"
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* About Me Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-700 pb-4">
            Hi, I’m Robin! As you might have guessed, I’m a proud band geek and
            an enthusiastic developer. Born in Jacksonville, FL, I spent much of
            my life moving around as a military brat, following my Navy dad’s
            footsteps. From an early age, I was inspired by watching him take
            apart computers and programs to make them his own, which sparked my
            passion for programming.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 pb-4    ">
            Today, I channel that passion into creating meaningful projects. I
            share my home with three amazing pets: my cats, Sammy and Jayden,
            and my dog, Lincoln. When I’m not coding, you’ll find me diving into
            my favorite hobbies—basketball, crafting, anime, and video games. My
            love for all things nerdy fuels my curiosity and drives my technical
            knowledge, and I’m always ready to share that enthusiasm (sometimes
            to a fault!).
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            As a lifelong learner, I’m committed to staying ahead of the curve,
            adapting to new technologies, and ensuring that every project I work
            on is innovative and up-to-date. I’d love the chance to use my
            skills and creativity to turn your vision into a reality. Let’s
            build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
