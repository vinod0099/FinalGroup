import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className="">
   
   <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-1/2 -left-12">
        <Image src={'/sallad-right.png'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
      <div className="h-48 md:w-48 sm:w-36 w-24 absolute top-44 -right-12">
        <Image src={'/sallad-left.png'} layout={'fill'} objectFit='contain' alt={'salad'} />
      </div>
   
    </section>
  );
}
