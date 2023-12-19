import Image from 'next/image';
import MenuTitle from './Menutitle';

const Hero = () => {
  return (
    <>

      <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
        {/* Left Column for Text */}
        <div className="col-span-1 md:col-span-1">
          <div className="py-16 px-8">
            <h1 className="text-6xl sm:text-6xl font-bold mb-4">Happiness is a warm Pizza<span className="text-orange-500 font-bold"> with our prices</span></h1>
            <p className="text-gray-500 text-xl sm:text-3xl font-semibold mb-8"> Sign Up Now and your journey to happiness begins with a <span className="text-orange-500">Free Pizza</span> from  us on your<br/><span className="text-orange-500">First Order</span></p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-2xl sm:text-3xl flex items-center justify-center text-white px-4 sm:px-6 py-2 rounded-full text-sm w-full sm:w-auto">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Column for Image */}
        <div className="col-span-1 md:col-span-1">
          <div className="w-full h-auto mx-auto">
            <Image src="/personpizza2.webp" width={800} height={1200} objectFit="contain" alt="pizza" />
          </div>
        </div>

        {/* MenuTitle centered below the two columns */}
       
      </section>
      <div className="col-span-1 md:col-span-2 flex justify-center md-[6px]">
          <MenuTitle/>
        </div>
    </>
  );
};

export default Hero;








