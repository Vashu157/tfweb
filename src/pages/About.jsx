import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center h-screen w-full pt-20 text-green-600"
      style={{
        backgroundImage: "url('https://nitd.almabay.in/wp-content/uploads/2023/03/NIT-Delhi.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        opacity: 1,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 text-white">
        <h1 className="text-10xl md:text-6xl font-bold mb-8 text-center  text-green-500">
          About Us
        </h1>

        {/* About NIT Delhi */}
        <div className="max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center underline decoration-white decoration-4">
             NIT Delhi
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            National Institute of Technology Delhi (NIT Delhi) is one of the premier institutions of higher 
            education in India. Established to foster excellence in technical education and research, 
            NIT Delhi aims to nurture the next generation of innovators, leaders, and problem solvers. 
            With a strong emphasis on academic rigor and practical exposure, NIT Delhi provides students with 
            the skills and knowledge needed to excel in the ever-evolving world of technology and science.
          </p>
        </div>
        {/* Horizontal Line */}
        <hr className="w-3/4 border-2 border-white mx-auto my-8 decoration-green" />

        {/* About Upvision */}
        <div className="max-w-5xl mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center underline decoration-white decoration-4">
             Upvision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            <span className="font-bold">Upvision</span>, the official technical club of NIT Delhi, is a dynamic community of 
            students dedicated to innovation and technological advancement. Upvision fosters a culture of collaboration 
            and continuous learning by organizing hands-on workshops, hackathons, and technical events. The club's focus 
            areas include Artificial Intelligence, Robotics, Software Development, and more. Our mission is to empower 
            students with the tools to create meaningful solutions and to inspire the next wave of tech enthusiasts. Join 
            us as we pave the way for groundbreaking achievements and a brighter future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;