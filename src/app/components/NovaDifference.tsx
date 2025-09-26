import Image from "next/image";
import Link from "next/link";
export default function NovaDifference() {
  return (
    <section className="py-30 px-34 bg-[#DDDAD5]">
      <div className="flex gap-6 items-center">
        <Image src={"/images/icon1.svg"} alt="icon" width={18} height={18} />
        <p className="text-base text-[#446150] font-semibold uppercase">
          The Nova Difference
        </p>
      </div>
      <h3 className="font-normal text-5xl text-dark w-4xl uppercase leading-16 mt-5 mb-17">
        Crafting Unmatched Beauty, Quality, and Trust.
      </h3>
      <div className="flex gap-20 mb-17">
        <div className="py-16">
          <div className="flex justify-between">
            <p className="font-normal text-3xl text-dark uppercase w-2/4">
              Exquisite Craftsmanship
            </p>
            <Image
              src={"/images/Arrow1.svg"}
              alt="icon"
              width={15}
              height={0}
              className="mb-7"
            />
          </div>
          <p className="text-base font-medium text-[#473E30] mt-5 mb-10">
            At Nova, we pride ourselves on our exquisite craftsmanship. Our
            artisans meticulously create each piece, ensuring that every detail
            reflects the highest standards of quality. From the selection of
            premium materials to the final polish, we guarantee that our jewelry
            not only shines but also tells a unique story. Experience the
            elegance and artistry that sets us apart.
          </p>
          <div className="flex justify-between mb-10">
            <p className="font-normal text-3xl text-[#473E30] uppercase">
              Premium Materials
            </p>
            <Image
              src={"/images/Arrow2.svg"}
              alt="icon"
              width={15}
              height={0}
            />
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-3xl text-[#473E30] uppercase">
              Timeless Designs
            </p>
            <Image
              src={"/images/Arrow2.svg"}
              alt="icon"
              width={15}
              height={0}
            />
          </div>
        </div>
        <Image
          src={"/images/Image6.png"}
          alt="image"
          width={480}
          height={480}
        />
      </div>
      <div className="flex gap-25 items-center">
        <Image
          src={"/images/Image7.png"}
          alt="image"
          width={550}
          height={550}
        />
        <div>
          <h3 className="font-normal text-5xl text-dark uppercase leading-14 w-md">
            Designed for Elegance, Created with Care.
          </h3>
          <p className="text-sm  font-medium text-[#473E30] mt-5 mb-10">
            Discover the allure of our meticulously crafted jewelry collections.
            Each piece is designed to embody elegance and sophistication,
            ensuring you stand out on any occasion. Our commitment to quality
            shines through every detail, from the selection of premium materials
            to the final touches that make each item unique. Experience the
            perfect blend of artistry and style with our stunning offerings.
          </p>
          <Link
            href={"/"}
            className="bg-dark text-accent text-sm py-3 px-6 uppercase "
          >
            Our Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
