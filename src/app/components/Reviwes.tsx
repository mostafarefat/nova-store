import Image from "next/image";
export default function Reviwes() {
  return (
    <section className="py-30 px-34 bg-[#DDDAD5]">
      <div className="max-w-4xl mb-15 mx-auto">
        <div className="flex justify-center items-center gap-5 mb-5">
          <Image src={"/images/icon1.svg"} alt="icon" width={18} height={18} />
          <p className="text-base text-[#446150] font-semibold uppercase">
            Love at First Sparkle
          </p>
          <Image src={"/images/icon1.svg"} alt="icon" width={18} height={18} />
        </div>
        <h2 className="text-5xl md:text-5xl font-normal leading-14 text-dark text-center uppercase">
          Discover Why Our Customers Keep Coming Back.
        </h2>
      </div>
      <div className="flex gap-6 justify-center">
        <Image
          src={"/images/elegant.jpg"}
          alt="icon"
          width={500}
          height={318}
        />
        <Image
          src={"/images/Column1.svg"}
          alt="icon"
          width={500}
          height={318}
        />
      </div>
      <div className="flex gap-6 justify-center my-6">
        <Image
          src={"/images/Column2.svg"}
          alt="icon"
          width={500}
          height={318}
        />
                <Image
          src={"/images/elegant1.jpg"}
          alt="icon"
          width={500}
          height={318}
        />
      </div>
      <div className="flex gap-6 justify-center">
        <Image
          src={"/images/elegant2.jpg"}
          alt="icon"
          width={500}
          height={318}
        />
        <Image src={"/images/Column.svg"} alt="icon" width={500} height={318} />
      </div>
    </section>
  );
}
