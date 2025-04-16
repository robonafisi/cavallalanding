"use client";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="w-full bg-black text-white py-24 px-6 sm:px-12 md:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
          <p className="text-lg sm:text-xl text-white">
            We live and breathe forklifts. Our team has background in industrial equipment, robot deployments, and material handling software. We started with humble beginnings and have been dedicated to working closely with each customer to bring them highest ROI possible.
          </p>
        </div>

        {/* Right: Team Image */}
        <div className="w-full">
          <img
            src="/teampicture1.png" // Replace with your actual team image path
            alt="Cavalla Team"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

