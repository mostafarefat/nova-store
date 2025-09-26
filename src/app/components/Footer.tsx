import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="py-15 border-b border-white/20">
        <Image
          src={"/images/TextBg1.svg"}
          alt="logo"
          width={1400}
          height={350}
        />
      </div>
      <div className="flex  gap-22 justify-center my-20">
        <Image
          src={"/images/footerImage.png"}
          alt="logo"
          width={360}
          height={360}
        />
        <div>
          <p className="font-normal text-xs text-white/60 uppercase mb-5">
            Call Us
          </p>
          <p className="font-normal text-3xl text-white uppercase">
            +01127795074
          </p>
        </div>
        <div className="max-w-xs">
          <p className="font-normal text-xs text-white/60 uppercase mb-5">
            Email Us
          </p>
          <p className="font-normal text-3xl text-white uppercase ">
            support@Nova.com
          </p>
          <p className="font-normal text-white/60 text-sm uppercase my-8">
            At Nova, we offer a stunning array of accessories, meticulously
            created to embody elegance and sophistication. Each piece is a
            testament to our dedication to quality, designed to commemorate your
            most treasured moments.
          </p>
          <div className="flex gap-7 font-normal text-sm text-white/60 uppercase">
            <p>Accessories</p>
            <p>watches</p>
            <p>sunglasses</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary flex justify-between items-center py-6 px-38 text-xs text-white/60 uppercase">
        <p>Nova Store Design by Ebrahim elgendy</p>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
