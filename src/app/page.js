 "use client";

import { useState } from 'react';

export default function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden">
  
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-orange-500/30 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-48 h-48 border border-orange-500/20 rounded-full"></div>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl text-gray-400 font-light">
                Hello,
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                I'm <span className="text-orange-500">Theekshana Dilsara</span>
              </h1>
              <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
                Data Science Undergraduate
              </h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A Data Science undergraduate at SLIIT, I am passionate about analytics, machine learning, and data-driven decision-making. My experience includes developing websites, mobile applications, dashboards, and various academic projects—each contributing to my ability to extract insights and solve real-world challenges through data. With a clear focus on advancing my career in data science, I am committed to deepening my expertise in machine learning, analytics, and data-driven solution development to create meaningful and measurable impact.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center min-w-[140px]"
              >
                Hire Me
              </a>
              <a 
                href="/projects" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 text-center min-w-[140px]"
              >
                My Works
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Circle */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Orange Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-8 border-4 border-orange-500 rounded-full"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                {!imageError ? (
                  <img 
                    src="/profile.JPG" 
                    alt="Theekshana Dilsara" 
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-7xl md:text-8xl text-orange-500 font-bold">TD</div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
             <div className="absolute -top-4 -left-2 w-12 h-12 bg-orange-500/8 rounded-full backdrop-blur-sm border border-orange-500/5 animate-pulse "></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/10 rounded-lg backdrop-blur-sm border border-orange-500/10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-orange-500/5 rounded-full backdrop-blur-sm border border-orange-500/8 animate-pulse"></div>
            {/* <div className="absolute -top-5 -left-25 w-8 h-8 bg-orange-500/20 rounded-full backdrop-blur-sm border border-orange-500/30 animate-pulse "></div> */}
            {/* <div className="absolute -top-17 -right-19 w-10 h-10 bg-orange-500/10 rounded-lg backdrop-blur-sm border border-orange-500/30 animate-pulse"></div> */}
            {/* <div className="absolute -bottom-1 -right-8 w-14 h-14 bg-orange-500/10 rounded-full backdrop-blur-sm border border-orange-500/30 animate-pulse"></div> */}
            {/* <div className="absolute -top-15 -left-2 w-12 h-12 bg-orange-500/20 rounded-full backdrop-blur-sm border border-orange-500/30 animate-pulse "></div> */}
        </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      

      {/* Quick Stats Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                  <p className="text-gray-400">
                    Python, SQL, Power BI for insightful analytics
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-gray-400">
                    Building predictive models with Scikit-learn
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💻</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Development</h3>
                  <p className="text-gray-400">
                    Full-stack web & mobile application development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}