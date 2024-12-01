"use client";

import React from 'react'

const HomeAbout = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-xl text-gray-600 mb-8">
          Im a passionate developer who loves creating beautiful and functional web experiences.
          With expertise in React, Three.js, and modern web technologies, I bring ideas to life
          through code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600">React, Next.js, Three.js</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-600">Node.js, Express, MongoDB</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-600">Figma, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;