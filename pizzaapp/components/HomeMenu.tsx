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
      


      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -right-6">
        <Image src={'/tomato-png.webp'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
    </section>
  );
}
