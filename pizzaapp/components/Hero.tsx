import Image from 'next/image';
import MenuTitle from './MenuTitle';

const Hero = () => {
  return (
    <>
      <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
        {/* Left Column for Text */}
        <div className="py-16 px-8 col-span-1 md:col-span-1">
          <h1 className="text-6xl sm:text-6xl font-bold mb-4">
            Every Slice Tells a <span className="text-orange-500">Delicious Story...</span>
          </h1>
          <p className="text-gray-500 text-xl sm:text-3xl font-semibold mb-8">
            Order Now and Get a <span className="text-orange-500">Free Pizza</span> on your
            <br /><span className="text-orange-500">First Order</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="bg-orange-500 text-2xl sm:text-3xl flex items-center justify-center text-white px-4 sm:px-6 py-2 rounded-full text-sm w-full sm:w-auto">
              ORDER NOW
            </a>
          </div>
        </div>

        {/* Right Column for Image */}
        <div className="w-full h-auto mx-auto col-span-1 md:col-span-1">
          <Image
            src="/personpizza2.webp"
            width={800}
            height={1200}
            objectFit="contain"
            alt="pizza"
            quality={75}
            priority // This marks the image as high priority to preload
            placeholder="blur" // Add this to provide a blurred image placeholder
            blurDataURL="/path_to_your_placeholder_image" // Replace with the path to your low-quality placeholder image
          />
        </div>
      </section>

      {/* MenuTitle centered below the two columns */}
      <div className="flex justify-center col-span-1 md:col-span-2">
        <MenuTitle />
      </div>
    </>
  );
};

export default Hero;








