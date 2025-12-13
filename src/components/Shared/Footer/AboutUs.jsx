import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/whyassetverse.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);
  return (
    <div className="min-h-screen px-6 py-12 bg-base-100  dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About AssetVerse</h1>
          <p className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            AssetVerse is a smart asset management platform designed to help
            organizations manage, track, and optimize company assets
            efficiently.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-gray-600">
          <div className="dark:bg-blue-950 border border-gray-200  rounded-xl p-6 shadow">
            <h3 className="text-2xl font-semibold mb-3">🚀 Our Mission</h3>
            <p className="text-gray-400 dark:text-gray-500">
              Our mission is to simplify asset tracking and empower businesses
              with transparent, secure, and real-time asset management
              solutions.
            </p>
          </div>

          <div className="bg-base dark:bg-gray-800 border border-gray-200 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-semibold mb-3">🌍 Our Vision</h3>
            <p className="text-gray-400 dark:text-gray-300">
              We envision a future where organizations can manage assets without
              complexity, saving time, reducing costs, and increasing
              efficiency.
            </p>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose AssetVerse?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((dat, index) => (
              <div
                key={index}
                className="bg-base dark:bg-gray-800 border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2">{dat.title}</h4>
                <p className="text-gray-400 dark:text-gray-300">{dat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Built with ❤️ using modern web technologies
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            React • Tailwind CSS • Node.js • MongoDB • JWT
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
