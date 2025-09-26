import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "AURORA RINGS COLLECTION",
    price: "450 EGP",
    image: "/images/Image.png",
  },
  {
    id: 2,
    title: "SERENITY GOLD SET",
    price: "785 EGP",
    image: "/images/Image2.png",
  },
  {
    id: 3,
    title: "ETHEREAL PEARL SET",
    price: "655 EGP",
    image: "/images/image4.png",
  },
  {
    id: 4,
    title: "COOL SHADES SUNGLASSES",
    price: "370 EGP",
    image: "/images/Image1.png",
  },
  {
    id: 5,
    title: "STARLIGHT TISSOT MAN SET",
    price: "1200 EGP",
    image: "/images/image3.png",
  },
  {
    id: 6,
    title: "CELESTIAL BRACELET SET",
    price: "180 EGP",
    image: "/images/image5.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-30 px-34 bg-[#F4F3F2]">
      {/* العنوان */}
      <div className="mb-15 text-center">
        <div className="flex justify-center items-center gap-5 mb-5">
          <Image src={"/images/icon1.svg"} alt="icon" width={18} height={18} />
          <p className="text-base text-[#446150] font-semibold">
            FEATURED PRODUCTS
          </p>
          <Image src={"/images/icon1.svg"} alt="icon" width={18} height={18} />
        </div>

        <h2 className="text-5xl md:text-5xl font-normal leading-14 text-dark">
          TIMELESS PIECES CRAFTED FOR <br /> EVERY OCCASION
        </h2>
      </div>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${(index % 3 === 1) ? "mt-12" : ""}`} // العمود التاني بس
          >
            <div className="w-full h-64">
              <Image
                src={product.image}
                alt={product.title}
                width={360}
                height={360}
                className="object-cover"
              />
            </div>
            <div className="flex mt-24 mb-6 justify-between items-center">
              <h3 className="text-lg font-normal text-dark w-2/4 uppercase">
                {product.title}
              </h3>
              <p className="text-3xl font-normal text-[#446150]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* زرار الشوبينج */}
      <div className="mt-12 text-center">
        <button className="bg-dark text-accent text-sm py-3 px-6 uppercase hover:bg-gray-800 transition">
          GO TO SHOPPING
        </button>
      </div>
    </section>
  );
}

