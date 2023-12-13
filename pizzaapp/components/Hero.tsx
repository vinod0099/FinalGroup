 // components/Hero.js
 import Image from 'next/image';

 const Hero = () => {
   return (
     <section className="hero grid grid-cols-1 sm:grid-cols-2 gap-8 py-16 mt-4">
       {/* Left Column */}
       <div className="col-span-1">
         <div className="py-16 px-8">
           <h1 className="text-4xl sm:text-6xl font-bold mb-4">Every Slice Tells a <span className="text-primary">Delicious Story...</span></h1>
           <p className="text-gray-500 text-xl sm:text-3xl font-semibold mb-8"> Order Now and Get a <span className="text-primary">Free Pizza</span> on Your <span className="text-primary">First Order</span></p>
           <div className="flex flex-col sm:flex-row gap-4">
           <button className="bg-primary text-2xl sm:text-3xl flex items-center justify-center text-white px-4 sm:px-6 py-2 rounded-full text-sm w-full sm:w-auto">
  ORDER NOW
</button>
           </div>
         </div>
       </div>
 
       {/* Right Column */}
       <div className="col-span-1 relative">
        <Image src="/personpizza1.png" layout="responsive" width={500} height={700} objectFit="contain" alt="pizza" />
      </div>
     </section>
   );
 };
 
 export default Hero;
 