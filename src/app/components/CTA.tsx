import Image from "next/image";
import Link from "next/link";
export default function CTA() {
  return (
    <section className="bg-[url('/images/Bg1.jpg')] h-[960px]  bg-cover bg-center">
      <div className=" pt-56 pb-45 pl-39 w-full bg-primary/30 h-full">
      <div className="max-w-5xl">
        <Image
          src={"/images/Star1.svg"}
          alt="image"
          width={80}
          height={80}
        />
        <h2 className="font-normal text-[90px] max-w-5xl  leading-28 text-white uppercase mt-20 mb-10">Radiance You Can Wear</h2>
        <div className="flex justify-between items-center bg-[#534949]/40 py-8 px-4 rounded-lg gap-10">
          <p className="text-white text-xs max-w-2xl uppercase ">{`Experience the artistry and elegance of Qilaue Jewelry. Whether
            you're looking for a timeless gift or a piece that reflects your
            unique style, our handcrafted collections are designed to shine with
            you. Explore now and find your perfect match.`}
            
          </p>
          <Link href={"/"} className="bg-dark text-accent text-sm py-3 px-6 ">
            SHOP NOW
          </Link>
        </div>
      </div>        
      </div>

    </section>
  );
}
