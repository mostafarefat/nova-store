import Image from "next/image";
import Link from "next/link";
export default function AboutUs() {
  return (
    <section className="bg-[#DDDAD5] relative min-h-[1000px]">
      <div className="flex absolute z-10 ">
        <Image
          src={"/images/Replace2.png"}
          alt="image"
          width={350}
          height={550}
          className="mt-28 mb-16 ml-48 mr-40"
        />
        <div className="w-md mt-28 ">
          <div className="flex gap-5">
            <Image
              src={"/images/icon1.svg"}
              alt="icon"
              width={18}
              height={18}
            />
            <h3 className="font-semibold text-sm text-[#446150]">ABOUT US</h3>
          </div>
          <h3 className="font-normal text-5xl text-dark uppercase my-4 leading-15">
            Nova: Where Art Meets Elegance in Every Piece.
          </h3>
          <p className="font-normal text-sm text-[#473E30] pr-5 mb-8">
            At Nova, we believe in crafting jewelry that tells a story. Each
            piece is designed with meticulous attention to detail, ensuring that
            it not only enhances your beauty but also resonates with your
            personal journey. Our collections are a celebration of elegance and
            individuality, perfect for any occasion.
          </p>
          <Link href={"/"} className="bg-dark text-accent text-sm py-3 px-6 ">
            MORE ABOUT US
          </Link>
        </div>
      </div>
      <div className="absolute top-86 ">
        <Image
          src={"/images/TextBg.png"}
          alt="icon"
          width={1400}
          height={350}
        />
      </div>
      <div className="absolute top-[725px] flex">
        <Image
          src={"/images/Replace3.png"}
          alt="image"
          width={337.5}
          height={280}
        />
        <Image
          src={"/images/Replace4.png"}
          alt="image"
          width={337.5}
          height={280}
        />
        <Image
          src={"/images/Replace5.png"}
          alt="image"
          width={337.5}
          height={280}
        />
        <Image
          src={"/images/Replace6.png"}
          alt="image"
          width={337.5}
          height={280}
        />
      </div>
    </section>
  );
}
