import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="bg-coolGray-100">
      <h2 className="text-5xl font-bold my-16 text-center text-red-600">Our Story</h2>

      <div className="container mx-auto px-4 lg:px-16">
        {/* Each Row with Image and Content */}
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80"> {/* Adjust the height as necessary */}
              <img 
                src="/AboutPage.jpeg" // Replace with your actual image path
                alt="Tradition of Pizza Making"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-gray-800">
            <p className="text-xl mb-6">
              
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80"> {/* Adjust the height as necessary */}
              <img 
                src="/abut2.jpg" // Replace with your actual image path
                alt="Artisanal Ingredients"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-gray-800">
            <p className="text-xl mb-6">
             
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg h-80"> {/* Adjust the height as necessary */}
              <img 
                src="/abot3.jpeg" // Replace with your actual image path
                alt="Community and Connection"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-gray-800">
            <p className="text-xl mb-6">
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
