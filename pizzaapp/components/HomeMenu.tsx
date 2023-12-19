import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className="">
   
   <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -left-12">
        <Image src={'/sallad-right2.webp'} layout={'fill'} objectFit='contain' alt={'salad'}   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-44 -right-12">
        <Image src={'/sallad-left.webp'} layout={'fill'} objectFit='contain' alt={'salad'}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      


      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -right-6">
      <Image
  src="/tomato-png.webp"
  layout="responsive"
  width={700} // The width of the display size
  height={475} // The height of the display size
  objectFit="cover"
  alt="Descriptive text for image"
  priority // Tells Next.js to preload this image
/>
      </div>
    </section>
  );
}
