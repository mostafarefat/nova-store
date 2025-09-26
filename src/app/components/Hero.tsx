import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-secondary flex justify-between items-center px-34 relative">
      <hr className="text-white" />
      <div className="absolute top-38  left-14 z-50  w-64  ">
        <Image
          src={"/images/Replace.png"}
          alt="image"
          width={190}
          height={220}
        ></Image>
        <p className="text-white font-normal uppercase leading-4 text-sm my-5">
          Elevate your style with stunning collections that reflect your
          brilliance and individuality.
        </p>
        <Link
          href={"/"}
          className="bg-dark text-accent text-sm py-3 px-6 uppercase "
        >
          Our Collections
        </Link>
        <Image
          src={"/images/Scroll.svg"}
          alt="image"
          width={180}
          height={125}
          className="mt-[180px]"
        ></Image>
      </div>
      <div className="bg-[url('/images/Bg.jpg')] h-[835px] bg-center bg-cover  w-full flex justify-center ">
        <div className="w-4xl text-center  h-full pt-[300px] ">
          <h2 className="text-white text-8xl font-normal uppercase mb-50 leading-28 ">
            Shine On, Wear It!
          </h2>
          <Link href={"/"} className="bg-dark text-accent text-sm py-3 px-6 ">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="absolute top-22 right-3  w-60 z-10">
        <Image
          src={"/images/Star1.svg"}
          alt="image"
          width={80}
          height={80}
          className="ml-19 mb-30"
        ></Image>
        <Image
          src={"/images/Replace1.png"}
          alt="image"
          width={190}
          height={220}
        ></Image>
        <div className="flex mt-5 gap-4">
          <p className="text-white text-sm font-normal uppercase leading-4 w-2/3">
            Timeless Elegance, Redefined
          </p>
          <Image
            src={"/images/Icon.svg"}
            alt="image"
            width={30}
            height={30}
          ></Image>
        </div>
      </div>
    </section>
  );
}
