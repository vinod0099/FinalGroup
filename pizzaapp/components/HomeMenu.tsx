import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className="">
   
   <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -left-12">
        <Image src={'/sallad-right2.webp'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-44 -right-12">
        <Image src={'/sallad-left.webp'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
      <div className="absolute top-44 left-0 md:left-[-3rem] lg:left-[-4rem] xl:left-[-6rem] w-16 h-16 md:w-40 md:h-40 lg:w-64 lg:h-72 2xl:w-72 2xl:h-80">
        <Image src={'/cheese1.webp'} layout={'fill'} objectFit='contain' alt={'Cheese'} />
      </div>


      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -right-6">
        <Image src={'/tomato-png.webp'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
    </section>
  );
}
