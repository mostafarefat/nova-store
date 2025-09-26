import Image from "next/image";
import Link from "next/link";
export default function OurServices() {
  return (
    <section className="py-30 px-34 bg-primary">
      <div className="  max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-5 mb-5">
          <Image
            src={"/images/Vector1.svg"}
            alt="icon"
            width={18}
            height={18}
          />
          <p className="text-base text-accent font-semibold uppercase">
            Our Services
          </p>
          <Image
            src={"/images/Vector1.svg"}
            alt="icon"
            width={18}
            height={18}
          />
        </div>
        <h2 className="font-normal uppercase text-5xl text-center text-white leading-15">
          Unmatched Craftsmanship and Personalized Service for All Your
          accessory Needs
        </h2>
      </div>
      <div className="flex gap-7 my-15">
        <Image
          src={"/images/IconBox1.svg"}
          alt="box"
          width={350}
          height={350}
        />
        <Image
          src={"/images/IconBox2.svg"}
          alt="box"
          width={350}
          height={350}
        />
        <Image
          src={"/images/IconBox3.svg"}
          alt="box"
          width={350}
          height={350}
        />
      </div>
      <div className="text-center  max-w-2xl mx-auto pt-5 ">
        <p className="font-normal text-sm text-white/60 max-w-3xl mb-10">
          Discover the elegance of our curated collections, designed to elevate
          your style and express your individuality. Each piece is crafted with
          care, ensuring that you find the perfect accessory for any occasion.
          Experience the blend of timeless beauty and modern sophistication that
          defines our brand.
        </p>
        <Link
          href={"/"}
          className="bg-secondary text-accent text-sm py-3 px-6 uppercase "
        >
          See All Services
        </Link>
      </div>
    </section>
  );
}
