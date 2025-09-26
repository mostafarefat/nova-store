import Link from "next/link";
import Image from "next/image";
export default function TrustSingals() {
  return (
    <section className="flex justify-center items-cente bg-primary pt-24 pb-8 gap-18 text-center">
      <div>
        <h3 className="text-white/60 text-8xl mb-5">90%</h3>
        <p className="text-white/80 text-sm w-28 uppercase">
          Eco-Friendly Materials Used
        </p>
      </div>
      <div className="mt-20">
        <h3 className="text-white/60 text-8xl mb-5">5+</h3>
        <p className="text-white/80 text-sm w-24 uppercase">
          Celebrating Over 5 Years of Craftsmans hip
        </p>
      </div>
      <div>
        <h3 className="text-white/60 text-8xl mb-5">4K+</h3>
        <p className="text-white/80 text-sm w-32 uppercase">orders confirmed</p>
      </div>
      <div className="mt-20">
        <h3 className="text-white/60 text-8xl mb-5">3k+</h3>
        <p className="text-white/80 text-sm w-32 uppercase">
          Custom Pieces Created
        </p>
      </div>
      <div className="bg-secondary rounded-full  w-20 h-20 mt-18 flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={"/images/arrowUp.svg"}
            alt="icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </section>
  );
}
